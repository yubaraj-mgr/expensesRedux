import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import DashboardForm from "../components/DashboardForm";
import DashboardTable from "../components/DashboardTable";
import "../App.css";

const Dashboard = () => {
  const { user } = useSelector((state) => state.UserSlice);
  const navigate = useNavigate();
  useEffect(() => {
    !user._id && navigate("/");
  }, [user]);

  return (
    <div className="dashboard">
      <DashboardForm />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
