import { memo, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, uptade } from "../lib/features/dataSlice";
import type { RootState } from "../lib";

interface IState {
  name: string;
  price: string;
  brand: string;
  color: string;
}

const initialState: IState = {
  name: "",
  price: "",
  brand: "",
  color: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<IState>(initialState);
  const editingItem = useSelector((state: RootState) => state.data.editingItem);
  const dispatch = useDispatch();

  useEffect(() =>{
    if (editingItem) {
      setFormData(editingItem)
    }
  }, [editingItem])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingItem) {
      const updatedItem = {
        ...formData,
        id: editingItem.id
      }
      dispatch(uptade(updatedItem));
      
    }else{
      const item = {
        ...formData,
        id: Date.now(),
      };
      dispatch(add(item));
    }
    setFormData(initialState);
  };

  return (
    <div className="Contact bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-gray-200 p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Contact</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Name"
            className="border px-3 py-2 rounded w-full"
          />
          <input
            value={formData.price}
            onChange={handleChange}
            type="number"
            name="price"
            placeholder="Price"
            className="border px-3 py-2 rounded w-full"
          />
          <input
            value={formData.brand}
            onChange={handleChange}
            type="text"
            name="brand"
            placeholder="Brand"
            className="border px-3 py-2 rounded w-full"
          />
          <select
            value={formData.color}
            onChange={handleChange}
            name="color"
            className="border px-3 py-2 rounded w-full"
          >
            <option value="">Select color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>

          <button className="mt-2 bg-gray-200 px-4 py-2 rounded border transition">
            {editingItem ? "save" : "send"}
          </button>
          {editingItem && <button type="button">cencel</button>}
        </form>
      </div>
    </div>
  );
};

export default memo(Contact);
