import { Label, Spinner, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// This is a React component that renders a form to create a new category,
// as well as a list of existing categories.
export default function CreateCategory() {
  // State variables for form data and loading state.
  const [formData, setFormData] = useState({ name: '' });
  const [isLoading, setIsLoading] = useState(false);

  // The navigate function from react-router-dom allows us to navigate to different routes.
  const navigate = useNavigate();

  // State variable to store the list of categories fetched from the server.
  const [categories, setCategories] = useState([]);

  // The currentUser object is retrieved from the Redux store.
  const { currentUser } = useSelector((state) => state.user);

  // This effect runs when the list of categories is updated, and fetches the categories
  // from the server.
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/category/getCategory');
        const data = await response.json();
        if (response.ok) {
          setCategories(data);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchCategories();
  }, [setCategories]);

  // This function updates the formData state with the value of the input field.
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // This function handles the form submission, by sending a POST request to the server
  // to create a new category.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch('/api/category/createCategory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message);
      } else {
        toast.success('Category created!');
        navigate('/dashboard?tab=createProduct');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
      setFormData({ name: '' });
    }
  };

  // This function handles the deletion of a category. It shows a confirmation dialog,
  // and if confirmed, sends a DELETE request to the server.
  const handleDelete = async (categoryId) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You want to delete this category!',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, Delete it!',
        cancelButtonText: 'Keep it!',
      });
      if (result.isConfirmed) {
        const response = await fetch(`/api/category/delete/${categoryId}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        if (!response.ok) {
          toast.error(data.message);
        } else {
          setCategories((prevCategories) =>
            prevCategories.filter((category) => category._id !== categoryId)
          );
          toast.success('Category has been deleted!');
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // This function handles the editing of a category. It shows an input dialog,
  // and if a new name is provided, sends a PUT request to the server.
  const handleEdit = async (categoryName, categoryId) => {
    const { value: newName } = await Swal.fire({
      title: 'Edit Category',
      input: 'text',
      inputValue: categoryName,
      inputPlaceholder: 'Enter Category',
    });
    if (newName) {
      try {
        const response = await fetch(`/api/category/edit/${categoryId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: newName }),
        });
        const data = await response.json();
        if (!response.ok) {
          toast.error(data.message);
        } else {
          setCategories((prevCategories) =>
            prevCategories.map((category) =>
              category._id === categoryId ? { ...category, name: newName } : category
            )
          );
          toast.success('Category edited successfully!');
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  // This is the main JSX returned by the component. It renders the form to create a new category,
  // as well as a list of existing categories.
  return (
    <div className='max-w-3xl p-3 md:ml-5 mt-7'>
      <h1 className='text-2xl font-semibold'>Create Category</h1>

      <div className='flex flex-col w-full'>
        <form className='my-8 flex gap-5 items-center' onSubmit={handleSubmit} autoComplete='off'>
          <div className='flex-1'>
            <Label>Category Name: </Label>
            <TextInput
              type='text'
              color='white'
              placeholder='Eg. Electronics'
              id='name'
              required
              value={formData.name}
              onChange={handleInputChange}
              className='w-full'
            />
          </div>
          <div className='flex-1'>
            <button
              type='submit'
              disabled={isLoading}
              className={`rounded-lg p-2 bg-[#3d52a0] text-white hover:bg-[#4f62aa] disabled:bg-[#4f62aa] font-semibold w-full mt-6 ${
                isLoading ? 'animate-pulse' : ''
              }`}
            >
              {isLoading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Creating...</span>
                </>
              ) : (
                'Create Category'
              )}
            </button>
          </div>
        </form>

        {currentUser.isAdmin && (
          <>
            <h2 className='text-slate-700 font-semibold text-xl mt-5'>Category Lists</h2>

            <div className='overflow-x-auto mt-5 border border-gray-300 shadow-md rounded-md'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-[#4f62aa]'>
                  <tr>
                    <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                      No
                    </th>
                    <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                      Date Created
                    </th>
                    <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                      Category Name
                    </th>
                    <th className='px-6 py-3 text-center text-sm font-medium text-white uppercase tracking-wider' colSpan='2'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {categories.map((category, index) => (
                    <tr key={category._id} className='hover:bg-[#ede8f5]'>
                      <td className='px-6 py-4 whitespace-nowrap text-sm'>{index + 1}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm'>
                      {new Date(category.createdAt).toLocaleDateString()}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm'>{category.name}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold cursor-pointer' onClick={() => handleEdit(category.name, category._id)}>
                        Edit
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold cursor-pointer' onClick={() => handleDelete(category._id)}>
                        Delete
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
