import { useState, useEffect } from 'react';
import { Product } from '../context/products-context';

export function useFetch(url: string) : Product[] {
    const [products, setPosts] = useState<Product[]>([]); 

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error');
                }
                const data = await response.json();
                setPosts(data); 
            } catch (error) {
                console.log("Error:", error); 
                setPosts([]); 
            } 
        };

        fetchPosts(); 
    }, [url]); 

    return products; 
}

export default useFetch;