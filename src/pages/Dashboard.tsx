import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../lib";
import { remove, setEditingItem, type IItem } from '../lib/features/dataSlice';
import carimage from "../assets/car.webp"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const data = useSelector((state: RootState) => state.data.value);
  const editingItem = useSelector((state: RootState) => state.data.editingItem);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log({editingItem});
  


  const HandleDelete = (id: number) => {
    dispatch(remove(id))
  }

  const HandleUpdate = (item: IItem) =>{
    dispatch(setEditingItem(item))
    navigate("/contact")
  }

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        {data.length === 0 ? (
          <p className="text-gray-600">Hozircha hech qanday ma'lumot yoq.</p>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {data.map((item: IItem) => (
              <div
                key={item.id}
                className="border p-4 rounded bg-white shadow-sm"
              >
                <img src={carimage} alt="" />
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Price:</span> {item.price}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Brand:</span> {item.brand}
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  <span className="font-medium">Color:</span> {item.color}
                </p>
                <div className="flex gap-2">
                  <button onClick={() => HandleUpdate(item)} className="text-blue-600 text-sm border w-16">edit</button>
                  <button onClick={() => HandleDelete(item.id)}  className="text-red-600 text-sm border w-16">delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Dashboard);
