import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

export default function CompanyDashboard() {
    const jobStats = {
        totalJobs: 25,
        activeJobs: 12,
    };

    const applicantData = [
        { name: "Applied", value: 60 },
        { name: "Hired", value: 15 },
        { name: "Rejected", value: 25 },
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
                Dashboard
            </Typography>


            <Stack direction="row" justifyContent="space-evenly" sx={{ mb: 4, width: '100%' }} >
                <Card
                    sx={{
                        p: 4,
                        borderLeft: "10px solid #2e7d32",
                        minWidth: 350,
                        height: 200,
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
                        25
                    </Typography>
                </Card>


                <Card
                    sx={{
                        p: 4,
                        borderLeft: "10px solid #2e7d32",
                        minWidth: 350,
                        height: 200,
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
                        12
                    </Typography>
                </Card>
            </Stack>


            <Card
                sx={{
                    mt: 4,
                    p: 3,
                    borderRadius: 3,
                    background: "#ffffff",
                    boxShadow: 3,
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
                                align="center"
                                verticalAlign="middle"
                                iconType="circle"
                                iconSize={18}
                                wrapperStyle={{ lineHeight: '3em', }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </Box>
            </Card>
        </Box>
    );
}
