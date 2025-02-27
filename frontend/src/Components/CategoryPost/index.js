import React from 'react';

const CategoryPost = () => {
    return (
        <div>
            <div>
                <div className="table-container">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border p-2 text-left">Sr.No</th>
                                <th className="border p-2 text-left">Subject</th>
                                <th className="border p-2 text-left">Name</th>
                                <th className="border p-2 text-left">Email</th>
                                <th className="border p-2 text-left">Explanation</th>
                                <th className="border p-2 text-left">Image</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2">1</td>
                                <td className="border p-2">test</td>
                                <td className="border p-2"></td>
                                <td className="border p-2"></td>
                                <td className="border p-2"></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CategoryPost;