import { Table } from "flowbite-react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { TiMinus, TiPlus } from "react-icons/ti";


export default function CartItem({ item, onDelete, onIncrement, onDecrement }) {
    // Use navigate hook to handle navigation
    const navigate = useNavigate();

   
    //Function to handle product page navigation.
    const handleProductPage = () => {
        // Navigate to the product page using the item's product ID
        navigate(`/product/${item.productId._id}`);
    };

    // Extract image URL, product name, and regular price from the item object
    const imageUrl = item.productId?.imageUrls?.[0] ?? '/placeholder.jpg';
    const productName = item.productId?.name ?? 'Product Unavailable';
    const regularPrice = item.productId?.regularPrice ?? 0;

    return (
        // Render a table row with each item's information
        <Table.Row className='cursor-pointer' key={item._id}>
            <Table.Cell className='ps-3' onClick={handleProductPage}>
                {/* Render the product image */}
                <img src={imageUrl} alt="" className='w-16 h-16 object-cover bg-gray-500' />
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap text-sm' style={{ maxWidth: '200px' }} onClick={handleProductPage}>
                {/* Render the product name with truncation */}
                <div className='truncate'>{productName}</div>
            </Table.Cell>
            <Table.Cell className='text-sm'>
                {/* Render a flex container for quantity increment and decrement buttons */}
                <div className='flex items-center gap-3'>
                    {/* Render the decrement button */}
                    <button className='text-lg' onClick={() => onDecrement(item._id, item.quantity)}>
                        <TiMinus />
                    </button>
                    {/* Render the quantity */}
                    <span className='font-semibold'>{item.quantity}</span>
                    {/* Render the increment button */}
                    <button className='text-lg' onClick={() => onIncrement(item._id, item.quantity)}>
                        <TiPlus />
                    </button>
                </div>
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap text-sm' onClick={handleProductPage}>
                {/* Render the regular price with Indian Rupee symbol */}
                ₹ {regularPrice.toLocaleString()}
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap text-lg text-red-600' onClick={() => onDelete(item._id)}>
                {/* Render the delete button */}
                <RiDeleteBin5Fill className="cursor-pointer" />
            </Table.Cell>
        </Table.Row>
    );
}
