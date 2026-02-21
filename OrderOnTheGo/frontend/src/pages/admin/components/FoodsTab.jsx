import { Plus, Search } from "lucide-react";
import DataTable from "./DataTable";

const FoodsTab = ({
  searchTerm,
  setSearchTerm,
  foodAvailability,
  setFoodAvailability,
  filteredFoods,
  onCreate,
  onEdit,
  onDelete,
  onToggleAvailability,
}) => (
  <div className="bg-white rounded-2xl shadow-lg p-6">
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-1 relative">
        <Search size={20} className="absolute left-4 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search food items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-500 outline-none transition"
        />
      </div>
      <div className="flex gap-2">
        <select
          value={foodAvailability}
          onChange={(e) => setFoodAvailability(e.target.value)}
          className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-500 outline-none transition"
        >
          <option value="all">All Availability</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <button
          onClick={onCreate}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
        >
          <Plus size={18} />
          Add Food
        </button>
      </div>
    </div>

    <DataTable
      columns={["title", "restaurant", "category", "price", "status"]}
      data={filteredFoods.map((food) => ({
        ...food,
        restaurant: food.restaurantId?.title || "N/A",
        status: food.isAvailable ? "available" : "unavailable",
      }))}
      renderActions={(row) => (
        <>
          <button
            onClick={() => onToggleAvailability(row)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              row.isAvailable
                ? "bg-green-100 text-green-700 hover:bg-green-200"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {row.isAvailable ? "Disable" : "Enable"}
          </button>
          <button
            onClick={() => onEdit(row)}
            className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(row)}
            className="px-3 py-1 rounded-lg text-xs font-semibold bg-red-100 text-red-700 hover:bg-red-200 transition"
          >
            Delete
          </button>
        </>
      )}
    />
  </div>
);

export default FoodsTab;
