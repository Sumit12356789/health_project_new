"use client";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React,{useContext} from "react";

function AddCourse() {
  const{UserCourseList,setUserCourseList}=useContext(UserCourseListContext)
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl">
          Hello,<span className="font-bold">{user?.fullName}</span>
          <p className="text-sm text-gray-500">Create new course with AI and Share with friends .</p>
        </h2>
      </div>
      <Link href={UserCourseList>=5?'/dashboard/upgrade':'/create-course'}>
      <Button>+ Create AI Course</Button>
      </Link>
    </div>
  );
}

export default AddCourse;
