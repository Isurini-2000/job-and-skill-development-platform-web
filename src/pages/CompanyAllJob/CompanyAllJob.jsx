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
import LanguageIcon from "@mui/icons-material/Language";
import { Search } from "lucide-react";

export default function CompanyAllJob() {
    const [searchTerm, setSearchTerm] = useState('');

    const jobs = [
        {
            id: 1,
            companyName: "Tech Solutions Inc.",
            logo: "https://via.placeholder.com/60/2e7d32/ffffff?text=TS",
            category: "Software Development",
            website: "https://techsolutions.com",
            description: "Looking for experienced React developers to join our dynamic team. Work on cutting-edge projects with modern technologies.",
            type: "Full-time",
            status: "Active",
        },
        {
            id: 2,
            companyName: "Digital Marketing Pro",
            logo: "https://via.placeholder.com/60/388e3c/ffffff?text=DM",
            category: "Marketing",
            website: "https://digitalmarketingpro.com",
            description: "Seeking creative digital marketing specialists to drive our online presence and engagement strategies.",
            type: "Part-time",
            status: "Active",
        },
        {
            id: 3,
            companyName: "Design Studio",
            logo: "https://via.placeholder.com/60/43a047/ffffff?text=DS",
            category: "UI/UX Design",
            website: "https://designstudio.com",
            description: "Join our creative team as a UI/UX designer. Create beautiful and intuitive user experiences.",
            type: "Contract",
            status: "Deactive",
        },
        {
            id: 4,
            companyName: "Cloud Systems Ltd",
            logo: "https://via.placeholder.com/60/4caf50/ffffff?text=CS",
            category: "DevOps Engineering",
            website: "https://cloudsystemsltd.com",
            description: "DevOps engineer needed for cloud infrastructure management and automation projects.",
            type: "Full-time",
            status: "Active",
        },
        {
            id: 5,
            companyName: "Data Analytics Corp",
            logo: "https://via.placeholder.com/60/66bb6a/ffffff?text=DA",
            category: "Data Science",
            website: "https://dataanalyticscorp.com",
            description: "Data scientist position available. Work with big data and machine learning technologies.",
            type: "Full-time",
            status: "Active",
        },
        {
            id: 6,
            companyName: "Mobile Apps Co",
            logo: "https://via.placeholder.com/60/81c784/ffffff?text=MA",
            category: "Mobile Development",
            website: "https://mobileappsco.com",
            description: "iOS/Android developer needed for innovative mobile application development.",
            type: "Remote",
            status: "Deactive",
        },
    ];
    

    const filteredJobs = jobs.filter(job =>
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <Box sx={{ p: 4, backgroundColor: "#e8f5e9", minHeight: "100vh" }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ mb: 3, color: "#2e7d32" }}
            >
                Company Jobs Overview
            </Typography>

            <Stack
                direction="row"
                spacing={3}
                sx={{ mb: 4, justifyContent: "flex-end" }}
            >
                <TextField
                    variant="outlined"
                    placeholder="Search jobs by company, category, or job type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                {filteredJobs.map((job) => (
                    <Grid item xs={12} sm={6} md={6} key={job.id}>
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
                                        src={job.logo}
                                        sx={{ width: 60, height: 60, border: "2px solid #2e7d32" }}
                                    />
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold" sx={{ color: "#2e7d32" }}>
                                            {job.companyName}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#388e3c", fontWeight: 600 }}
                                        >
                                            {job.category}
                                        </Typography>
                                    </Box>
                                </Stack>

                                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                                    <LanguageIcon sx={{ color: "#2e7d32", fontSize: 20 }} />
                                    <Typography
                                        variant="body2"
                                        component="a"
                                        href={job.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: "#1e88e5", textDecoration: "none", fontWeight: 600,
                                            "&:hover": { textDecoration: "underline" }
                                        }}
                                    >
                                        {job.website}
                                    </Typography>
                                </Stack>

                                <Typography sx={{ mt: 2, color: "#555" }}>
                                    {job.description}
                                </Typography>

                                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                                    <Chip
                                        label={job.type}
                                        sx={{
                                            backgroundColor: "#e8f5e9",
                                            color: "#2e7d32",
                                            fontWeight: "bold",
                                        }}
                                    />

                                    <Chip
                                        label={job.status}
                                        sx={{
                                            backgroundColor:
                                                job.status === "Active" ? "#4caf50" : "#9e9e9e",
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