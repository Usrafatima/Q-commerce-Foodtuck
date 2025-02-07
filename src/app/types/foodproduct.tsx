export type foodproduct = {
    _id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    quantity?: number; // Optional, as it will be added during cart logic
};

export type Cart = {
    _id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    quantity?: number; // Optional, as it will be added during cart logic
}
export default foodproduct  