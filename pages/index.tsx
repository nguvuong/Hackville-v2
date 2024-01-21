import { useRef, useState, useEffect } from 'react';
import QrScanner from 'qr-scanner';
import { Button } from "@/components/ui/button";
import { Camera, MapPin, MessageSquare } from "lucide-react";
import Link from 'next/link';
import NavBar from './NavBar';

export default function Home() {
  const [data, setData] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const qrScannerRef = useRef<QrScanner | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      qrScannerRef.current = new QrScanner(videoRef.current, (result) => {
        console.log('decoded qr code:', result);
        setData(result);
      });

      return () => {
        qrScannerRef.current?.stop();
      };
    }
  }, []);

  const handleScanClick = () => {
    qrScannerRef.current?.start();
    setIsCameraActive(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* <header className="flex justify-between items-center px-4 py-3 bg-white dark:bg-black shadow-md">
        <h1 className="text-xl font-bold">hoomie.club</h1>
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback className="dark:text-white">P</AvatarFallback>
          </Avatar>
        </div>
      </header> */}
      <NavBar />
      <main className="flex-grow flex flex-col items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full"
          style={{ objectFit: 'contain', maxHeight: 'calc(100vh - 100px)' }}
        />
        <p className="text-center mb-4">{isCameraActive ? "Press camera button to scan" : "Press the camera button to start scanning"}</p>
        {data && <p className="text-center absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md shadow-md">Result: <Link href={data}>hoomie.club



        </Link></p>}
      </main>
      <footer className="flex justify-around items-center p-4 bg-sky-300  dark:bg-black ">

        <Button variant="outline" className="rounded-full text-primary bg-primary-100 dark:bg-primary-800 dark:text-white">
          <MessageSquare className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          className="rounded-full text-primary bg-primary-100 dark:bg-primary-800 dark:text-white"
          onClick={handleScanClick}
        >
          <Camera className="h-6 w-6" />
        </Button>
        <Link href="/map" passHref>
          {/* Use Next.js Link component to navigate to map.tsx */}
          <Button variant="outline" className="rounded-full text-primary bg-primary-100 dark:bg-primary-800 dark:text-white">
            <MapPin className="h-6 w-6" />
          </Button>
        </Link>

      </footer >
    </div >
  );
}
