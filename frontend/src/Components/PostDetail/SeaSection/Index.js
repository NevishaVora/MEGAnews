import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/Action/Category.action";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import TextsmsIcon from "@mui/icons-material/Textsms";

const SeaSection = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const categoryData = useSelector((state) => state.category); 
    const userData = useSelector((state) => state.category);
    console.log("userData", userData);

    const getoneCategory = userData?.getCategory;
    useEffect(() => {
        if (id) {
            dispatch(getCategory(id)); // Fetch data when ID changes
        }
    }, [id, dispatch]);

    return (
        <div className="p-4">
            <div className="bg-gray-100 p-6 rounded-xl">
                <h1 className="text-[28px] font-normal">
                    {getoneCategory?.title}
                </h1>

                <div className="mt-2 mb-[-80px] flex justify-center">
                    <img
                        src={getoneCategory ? `http://localhost:5000/uploads/categoryimg/${getoneCategory.img}` : "/IMAGES/SeaSectionimg.png"}
                        className="w-full object-cover rounded-lg shadow-lg"
                        alt="Sea Section"
                    />
                </div>


            </div>

            <div className="flex flex-wrap items-center mt-[65px] gap-6 ml-60">
                <div className="flex items-center gap-1">
                    <CalendarTodayIcon className="h-[15px] w-[15px]" />
                    <span>{new Date(getoneCategory?.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    }) || "Date"}</span>
                </div>

                <div className="flex items-center gap-1">
                    <TextsmsIcon className="h-[15px] w-[15px]" />
                    <span>Comments: 35</span>
                </div>

                <div className="flex items-center gap-1">
                    <FolderOpenIcon className="h-[15px] w-[15px]" />
                    <span>Category: {getoneCategory?.category || "Sport"}</span>
                </div>
            </div>

            <p className="mt-4 text-[16px] leading-relaxed">
                {getoneCategory?.explanation}
            </p>
        </div>
    );
};

export default SeaSection;
