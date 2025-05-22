import React from "react";
import {Box,Paper,Typography} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,  PieChart,  Pie,  Cell,} from "recharts";



const stats = [
  { title: "Total Products", value: 1200 },
  { title: "Total Orders", value: 875 },
  { title: "Low Stock Items", value: 6 },
  { title: "Revenue Today", value: "$2,500" },
];


const salesData = [
  { month: "Jan", sales: 3000 },
  { month: "Feb", sales: 2000 },
  { month: "Mar", sales: 2780 },
  { month: "Apr", sales: 1890 },
  { month: "May", sales: 2390 },
  { month: "Jun", sales: 3490 },
  { month: "July", sales: 3490 },
  { month: "Aug", sales: 2000 },
  { month: "Sep", sales: 1500 },
  { month: "Oct", sales: 4240 },
  { month: "Nov", sales: 2000 },
  { month: "Dec", sales: 2876 },
];


const lowStock = [
  { name: "Paracetamol", stock: 3 },
  { name: "Aspirin", stock: 5 },
  { name: "Cough Syrup", stock: 2 },
];


const expiringSoon = [
  { name: "Cough Syrup", expiry: "2025-05-10" },
  { name: "Amoxicillin", expiry: "2025-05-18" },
];


const categoryData = [
  { name: "Tablets", value: 400 },
  { name: "Syrups", value: 300 },
  { name: "Ointments", value: 300 },
];

const COLORS = ["#388e3c", "#66bb6a", "#a5d6a7"];

function Dashboard() {
  return (
    <Box sx={{ p: 3, backgroundColor: "#f1f8e9" }}>
      <Typography variant="h6" gutterBottom sx={{ color: "#2e7d32", mb: 3 }}>
        Pharmacy Dashboard
      </Typography>

      <Box sx={{display: "flex",flexWrap: "wrap",gap: 2,justifyContent: "space-between", mb: 4 }}>
        {stats.map((stat, index) => (
          <Paper key={index} elevation={3} sx={{ p: 2,flex: "1 1 200px", minWidth: "200px", maxWidth: "250px", backgroundColor: "#e8f5e9", borderLeft: "5px solid #388e3c"}} >
            <Typography variant="subtitle1" sx={{ color: "#2e7d32" }}>
              {stat.title}
            </Typography>
            <Typography variant="h6" sx={{ color: "#1b5e20" }}>
              <b>{stat.value}</b>
            </Typography>
          </Paper>
        ))}
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "space-between"  }}>
        <Paper elevation={3} sx={{ flex: "1 1 300px", minWidth: "300px", maxWidth: "430px", p: 2, }} >
          <Typography variant="h6" gutterBottom>
            <b>Monthly Sales</b>
          </Typography>
          <ResponsiveContainer height={230} width="100%">
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#388e3c" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: "1 1 250px", minWidth: "250px", maxWidth: "300px"}} >
          <Paper elevation={3} sx={{ p: 2, backgroundColor: "#e8f5e9", height: 110, }} >
            <Typography variant="h6" gutterBottom>
              <b>Low Stock Items</b>
            </Typography>
            {lowStock.map((item, index) => (
              <Typography key={index} variant="body2">
                {item.name} - {item.stock} left
              </Typography>
            ))}
          </Paper>

          <Paper elevation={3}sx={{ p: 2, backgroundColor: "#fffde7", height: 110, }} >
            <Typography variant="h6" gutterBottom>
              <b>Expiring Soon</b>
            </Typography>
            {expiringSoon.map((item, index) => (
              <Typography key={index} variant="body2">
                {item.name} - {item.expiry}
              </Typography>
            ))}
          </Paper>
        </Box>

        <Paper elevation={3} sx={{ flex: "1 1 300px", minWidth: "320px", maxWidth: "370px", p: 2, }}>
          <Typography variant="h6" gutterBottom>
            <b>Category Breakdown</b>
          </Typography>
          <ResponsiveContainer width="100%" height={230}>
            <PieChart>
              <Tooltip />
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Box>
    </Box>
  );
}

export default Dashboard;
