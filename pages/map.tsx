// pages/about.tsx
import React, { useEffect, useState } from 'react';
import { connectToDatabase } from './api/mongo';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { List, ListItem, Card } from "@material-tailwind/react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavBar from './components/NavBar';
import DataDisplayComponent from './components/DataDisplayComponent';
// import gsap from 'gsap';

interface MapPageProps {
    data: any[]; // Assuming data is an array of objects
}

interface DataItem {
    _id: string;
    Name: string;
    Description: string;
    Email: string;
    Image: string;
}

const MapPage: React.FC<MapPageProps> = ({ data }) => {


    const router = useRouter();
    const { id } = router.query;
    const [selectedOption, setSelectedOption] = useState<string>(''); // Assuming the value is a string

    const handleOptionClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, itemId: string) => {
        setSelectedOption(itemId);
    };

    const getSelectedOptionDetails = (): DataItem | undefined => {
        return data.find((item) => item._id === selectedOption);
    };

    const selectedOptionDetails = getSelectedOptionDetails();



    useEffect(() => {
        // Set default selected option (optional)
        if (data.length > 0) {
            setSelectedOption(data[0].Name); // Replace 'propertyName' with the actual property you want to display
        }

        // Animate the dropdown on mount
        // gsap.from('#dropdown', { opacity: 0, y: -10, duration: 0.1 });
    }, [data]);

    return (
        <div>
            <NavBar />

            <div className="p-8 bg-gray-100">
                <label htmlFor="dropdown" className="block text-gray-600 mb-2">
                    Select an option:
                </label>
                <select
                    id="dropdown"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300  text-gray-600 mb-2"
                >
                    {data.map((item) => (
                        <option
                            key={item._id}
                            value={item._id}
                            onMouseDown={(e) => handleOptionClick(e, item._id)}
                        >
                            {item.Name}
                        </option>
                    ))}
                </select>

                {selectedOptionDetails && <DataDisplayComponent data={selectedOptionDetails} />}






            </div>
            <div p-8 bg-gray-100>

            </div>



            <br />

        </div >
    );
};


export async function getStaticProps() {
    const client = await connectToDatabase();
    const db = client.db('test');
    const collection = db.collection('destinations');

    const data = await collection.find({}).toArray();

    return {
        props: { data: JSON.parse(JSON.stringify(data)) },
    };
}

export default MapPage;
