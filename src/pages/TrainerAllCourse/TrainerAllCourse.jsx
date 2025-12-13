import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Card,
    CardContent,
    Avatar,
    Stack,
    Chip,
    Grid,
    InputAdornment,
} from "@mui/material";
import { Search } from "lucide-react";

export default function TrainerAllCourse() {
    const [searchQuery, setSearchQuery] = useState('');

    const courses = [
        {
            id: 1,
            title: 'Advanced JavaScript Programming',
            trainerName: 'John Smith',
            trainerPhoto: 'https://i.pravatar.cc/150?img=12',
            category: 'Web Development',
            description: 'Master advanced JavaScript concepts including async programming, closures, and modern ES6+ features.',
            status: 'Active',
            isOwnCourse: true
        },
        {
            id: 2,
            title: 'React Best Practices',
            trainerName: 'Sarah Johnson',
            trainerPhoto: 'https://i.pravatar.cc/150?img=45',
            category: 'Frontend',
            description: 'Learn professional React development patterns, hooks, state management, and performance optimization.',
            status: 'Active',
            isOwnCourse: false
        },
        {
            id: 3,
            title: 'Python for Data Science',
            trainerName: 'Michael Chen',
            trainerPhoto: 'https://i.pravatar.cc/150?img=33',
            category: 'Data Science',
            description: 'Comprehensive Python course covering pandas, numpy, matplotlib, and machine learning basics.',
            status: 'Active',
            isOwnCourse: false
        },
        {
            id: 4,
            title: 'UI/UX Design Fundamentals',
            trainerName: 'Emily Davis',
            trainerPhoto: 'https://i.pravatar.cc/150?img=27',
            category: 'Design',
            description: 'Learn the principles of user-centered design, wireframing, prototyping, and usability testing.',
            status: 'Inactive',
            isOwnCourse: false
        },
        {
            id: 5,
            title: 'Node.js Backend Development',
            trainerName: 'John Smith',
            trainerPhoto: 'https://i.pravatar.cc/150?img=12',
            category: 'Backend',
            description: 'Build scalable backend applications with Node.js, Express, and MongoDB.',
            status: 'Active',
            isOwnCourse: true
        },
        {
            id: 6,
            title: 'Mobile App Development',
            trainerName: 'David Wilson',
            trainerPhoto: 'https://i.pravatar.cc/150?img=68',
            category: 'Mobile',
            description: 'Create cross-platform mobile applications using React Native and modern mobile development practices.',
            status: 'Inactive',
            isOwnCourse: false
        }
    ];


    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.trainerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <Box sx={{ p: 4, backgroundColor: "#e8f5e9", minHeight: "100vh" }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ mb: 3, color: "#2e7d32" }}
            >
                Trainer Courses Overview
            </Typography>

            <Stack
                direction="row"
                spacing={3}
                sx={{ mb: 4, justifyContent: "flex-end" }}
            >
                <TextField
                    variant="outlined"
                    placeholder="Search courses by title, trainer, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                        backgroundColor: "#ffffff",
                        borderRadius: 2,
                        width: { xs: "100%", sm: "400px", md: "350px" },
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: '#66bb6a',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#4caf50',
                            },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#4caf50',
                        },

                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search size={20} color="#4caf50" />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Grid container spacing={8} justifyContent="space-evenly" >
                {filteredCourses.map((course) => (
                    <Grid item xs={12} sm={6} md={6} key={course.id}>
                        <Card
                            sx={{
                                p: 2,
                                borderLeft: "10px solid #2e7d32",
                                backgroundColor: "#ffffff",
                                borderRadius: 3,
                                boxShadow: 3,
                                height: "225px",
                                width: "600px",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                "&:hover": {
                                    transform: "translateY(-7px)",
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardContent>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar
                                        src={course.trainerPhoto}
                                        sx={{ width: 60, height: 60, border: "2px solid #2e7d32" }}
                                    />
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold" sx={{ color: "#2e7d32" }}>
                                            {course.trainerName}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#388e3c", fontWeight: 600 }}
                                        >
                                            {course.category}
                                        </Typography>
                                    </Box>
                                </Stack>


                                <Typography sx={{ mt: 2, color: "#555" }}>
                                    {course.description}
                                </Typography>

                                <Stack direction="row" sx={{ mt: 2 }} >
                                    <Chip
                                        label={course.status}
                                        sx={{
                                            width:150,
                                            backgroundColor:
                                                course.status === "Active" ? "#4caf50" : "#9e9e9e",
                                            color: "#ffffff",
                                            fontWeight: "bold",
                                        }}
                                    />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
}


