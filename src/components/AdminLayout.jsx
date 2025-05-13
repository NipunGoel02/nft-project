import { Outlet, Link } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <h2 className="text-white text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <Link to="/admin/courses" className="block text-gray-300 hover:bg-gray-700 p-2 rounded">Courses</Link>
          <Link to="/admin/users" className="block text-gray-300 hover:bg-gray-700 p-2 rounded">Users</Link>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}
