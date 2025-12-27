import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
    const cmpnyStats = {
        totalCompany: 24,
        activeCompany: 20,
    };

    const jobStats = {
        totalJobs: 62,
        activeJobs: 55,
    };

    const courseStats = {
        totalCourses: 32,
        activeCourses: 28,
    };

    const applicantData = [
        { name: "Applied", value: 60 },
        { name: "Hired", value: 15 },
        { name: "Rejected", value: 25 },
    ];

    const entrollsData = [
        { name: "Applied", value: 233 },
        { name: "Selected", value: 159 },
        { name: "Rejected", value: 64 },
    ];

    const COLORS = ["#044315ff ", "#FB8C00 ", "#FF0000 "];

    return (
        <Box
            sx={{
                p: 4,
                backgroundColor: "#e8f5e9",
                minHeight: "100vh",
            }}
        >

            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    mb: 4,
                    color: "#2e7d32",
                }}
            >
                Admin Dashboard
            </Typography>


            <Stack direction="row" justifyContent="space-evenly" sx={{ mb: 4, width: '100%' }} >
                <Box display="flex" flexDirection="column" gap={5}>
                    <Card
                        sx={{
                            p: 4,
                            borderLeft: "10px solid #2e7d32",
                            minWidth: 300,
                            height: 150,
                            borderRadius: 3,
                            boxShadow: 3,
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#1fd655",
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold">
                            Total Company
                        </Typography>

                        <Typography
                            variant="h1"
                            fontWeight="bold"
                            sx={{ textAlign: "center", width: "100%" }}
                        >
                            {cmpnyStats.totalCompany}
                        </Typography>
                    </Card>


                    <Card
                        sx={{
                            p: 4,
                            borderLeft: "10px solid #2e7d32",
                            minWidth: 300,
                            height: 150,
                            borderRadius: 3,
                            boxShadow: 3,
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#5ced73",
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold">
                            Active Company
                        </Typography>

                        <Typography
                            variant="h1"
                            fontWeight="bold"
                            sx={{ textAlign: "center", width: "100%" }}
                        >
                            {cmpnyStats.activeCompany}
                        </Typography>
                    </Card>

                </Box>

                <Box display="flex" flexDirection="column" gap={5}>
                    <Card
                        sx={{
                            p: 4,
                            borderLeft: "10px solid #2e7d32",
                            minWidth: 300,
                            height: 150,
                            borderRadius: 3,
                            boxShadow: 3,
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#1fd655",
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold">
                            Total Jobs
                        </Typography>

                        <Typography
                            variant="h1"
                            fontWeight="bold"
                            sx={{ textAlign: "center", width: "100%" }}
                        >
                            {jobStats.totalJobs}
                        </Typography>
                    </Card>

                    <Card
                        sx={{
                            p: 4,
                            borderLeft: "10px solid #2e7d32",
                            minWidth: 300,
                            height: 150,
                            borderRadius: 3,
                            boxShadow: 3,
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#5ced73",
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold">
                            Active Jobs
                        </Typography>

                        <Typography
                            variant="h1"
                            fontWeight="bold"
                            sx={{ textAlign: "center", width: "100%" }}
                        >
                            {jobStats.activeJobs}
                        </Typography>
                    </Card>

                </Box>

                <Box display="flex" flexDirection="column" gap={5}>
                    <Card
                        sx={{
                            p: 4,
                            borderLeft: "10px solid #2e7d32",
                            minWidth: 300,
                            height: 150,
                            borderRadius: 3,
                            boxShadow: 3,
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#1fd655",
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold">
                            Total Courses
                        </Typography>

                        <Typography
                            variant="h1"
                            fontWeight="bold"
                            sx={{ textAlign: "center", width: "100%" }}
                        >
                            {courseStats.totalCourses}
                        </Typography>
                    </Card>

                    <Card
                        sx={{
                            p: 4,
                            borderLeft: "10px solid #2e7d32",
                            minWidth: 300,
                            height: 150,
                            borderRadius: 3,
                            boxShadow: 3,
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#5ced73",
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold">
                            Active Courses
                        </Typography>

                        <Typography
                            variant="h1"
                            fontWeight="bold"
                            sx={{ textAlign: "center", width: "100%" }}
                        >
                            {courseStats.activeCourses}
                        </Typography>
                    </Card>

                </Box>
            </Stack>


            <Card
                sx={{
                    mt: 4,
                    p: 3,
                    borderRadius: 3,
                    background: "#ffffff",
                    boxShadow: 3,
                    display: "flex",
                    flexDirection: "row",

                }}
            >
                <Typography variant="h6" sx={{ mb: 2, color: "#07560bff", fontWeight: "bold" }}>
                    Applicants Overview
                </Typography>

                <Box sx={{ width: "100%", height: 400 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={applicantData}
                                cx="30%"
                                cy="50%"
                                outerRadius={150}
                                dataKey="value"
                                label
                            >
                                {applicantData.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend
                                layout="vertical"
                                verticalAlign="middle"
                                iconType="circle"
                                iconSize={18}
                                wrapperStyle={{ lineHeight: '3em',  right: 100, }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </Box>

                <Typography variant="h6" sx={{ mb: 2, color: "#07560bff", fontWeight: "bold" }}>
                    Entrolls Overview
                </Typography>

                <Box sx={{ width: "100%", height: 400 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={entrollsData}
                                cx="30%"
                                cy="50%"
                                outerRadius={150}
                                dataKey="value"
                                label
                            >
                                {entrollsData.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend
                                layout="vertical"
                                verticalAlign="middle"
                                iconType="circle"
                                iconSize={18}
                                wrapperStyle={{ lineHeight: '3em',  right: 100,}}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </Box>
            </Card>
        </Box>
    );
}
