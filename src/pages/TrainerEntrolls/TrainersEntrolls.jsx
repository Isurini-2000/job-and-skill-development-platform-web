import { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    Card,
    CardContent,
    Avatar,
    Button,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack,
    Divider,
    CardActions
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import { Eye } from 'lucide-react';


const TrainerEntrolls = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [tempStatus, setTempStatus] = useState('');

    const [applications, setApplications] = useState([
        {
            id: 1,
            name: 'John Doe',
            photo: 'https://i.pravatar.cc/150?img=12',
            status: 'pending',
            email: 'john.doe@email.com',
            phone: '+1 234 567 8900',
            address: '123 Main St, New York, NY 10001',
            skills: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
            experience: '3 years',
            jobCategory: 'Frontend Developer'
        },
        {
            id: 2,
            name: 'Jane Smith',
            photo: 'https://i.pravatar.cc/150?img=5',
            status: 'selected',
            email: 'jane.smith@email.com',
            phone: '+1 234 567 8901',
            address: '456 Oak Ave, Los Angeles, CA 90001',
            skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
            experience: '5 years',
            jobCategory: 'Backend Developer'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            photo: 'https://i.pravatar.cc/150?img=33',
            status: 'rejected',
            email: 'mike.johnson@email.com',
            phone: '+1 234 567 8902',
            address: '789 Pine Rd, Chicago, IL 60601',
            skills: ['UI/UX Design', 'Figma', 'Adobe XD'],
            experience: '2 years',
            jobCategory: 'UI/UX Designer'
        },
        {
            id: 4,
            name: 'Sarah Williams',
            photo: 'https://i.pravatar.cc/150?img=9',
            status: 'pending',
            email: 'sarah.williams@email.com',
            phone: '+1 234 567 8903',
            address: '321 Elm St, Boston, MA 02101',
            skills: ['Java', 'Spring Boot', 'Microservices', 'AWS'],
            experience: '4 years',
            jobCategory: 'Full Stack Developer'
        },
        {
            id: 5,
            name: 'David Brown',
            photo: 'https://i.pravatar.cc/150?img=15',
            status: 'pending',
            email: 'david.brown@email.com',
            phone: '+1 234 567 8904',
            address: '654 Maple Dr, Seattle, WA 98101',
            skills: ['DevOps', 'Kubernetes', 'CI/CD', 'Terraform'],
            experience: '6 years',
            jobCategory: 'DevOps Engineer'
        },
        {
            id: 6,
            name: 'Emily Davis',
            photo: 'https://i.pravatar.cc/150?img=20',
            status: 'selected',
            email: 'emily.davis@email.com',
            phone: '+1 234 567 8905',
            address: '987 Cedar Ln, Austin, TX 78701',
            skills: ['React Native', 'Flutter', 'iOS', 'Android'],
            experience: '4 years',
            jobCategory: 'Mobile Developer'
        }
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return '#FFA726';
            case 'selected':
                return '#66BB6A';
            case 'rejected':
                return '#EF5350';
            default:
                return '#9E9E9E';
        }
    };

    const handleViewClick = (applicant) => {
        setSelectedApplicant(applicant);
        setTempStatus(applicant.status);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedApplicant(null);
        setTempStatus('');
    };

    const handleStatusChange = (newStatus) => {
        setTempStatus(newStatus);
    };

    const handleSave = () => {
        setApplications(applications.map(app =>
            app.id === selectedApplicant.id ? { ...app, status: tempStatus } : app
        ));

        handleCloseDialog();
    };

    const filteredApplications = applications.filter(app => {
        const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.jobCategory.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'all' || app.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    return (
        <Box sx={{ bgcolor: '#e8f5e9', minHeight: '100vh', p: 4 }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ mb: 3, color: "#2e7d32" }}
            >
                Entrolls
            </Typography>

            <Stack
                direction="row"
                spacing={3}
                sx={{ mb: 4, justifyContent: "flex-end" }}
            >
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth sx={{ bgcolor: 'white', borderRadius: 2 }}>
                            <InputLabel sx={{
                                color: filterStatus ? '#2E7D32' : 'inherit',
                                '&.Mui-focused': {
                                    color: '#2E7D32',
                                }
                            }} >
                                Filter by Status
                            </InputLabel>
                            <Select
                                value={filterStatus}
                                label="Filter by Status"
                                onChange={(e) => setFilterStatus(e.target.value)}
                                sx={{
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#66BB6A',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#2E7D32',
                                    },
                                }}
                            >
                                <MenuItem value="all">All Entrolls</MenuItem>
                                <MenuItem value="pending">Pending</MenuItem>
                                <MenuItem value="selected">Selected</MenuItem>
                                <MenuItem value="rejected">Rejected</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TextField
                            variant="outlined"
                            placeholder="Search by name or job category..."
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
                                        <SearchIcon sx={{ color: '#66BB6A' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                </Grid>
            </Stack>

            <Grid container spacing={8} justifyContent="space-evenly">
                {filteredApplications.map((applicant) => (
                    <Grid item xs={12} sm={6} md={4} key={applicant.id}>
                        <Card
                            sx={{
                                p: 2,
                                borderLeft: "10px solid #2e7d32",
                                backgroundColor: "#ffffff",
                                height: '300px',
                                width: '250px',
                                borderRadius: 3,
                                boxShadow: 3,
                                transition: "transform 0.2s, box-shadow 0.2s",
                                "&:hover": {
                                    transform: "translateY(-7px)",
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                                <Avatar
                                    src={applicant.photo}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        margin: '0 auto 16px',
                                        border: '4px solid #E8F5E9',
                                    }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 600, color: '#2E7D32', mb: 1 }}>
                                    {applicant.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#616161', mb: 2 }}>
                                    {applicant.jobCategory}
                                </Typography>
                                <Chip
                                    label={applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                                    sx={{
                                        bgcolor: getStatusColor(applicant.status),
                                        color: 'white',
                                        fontWeight: 600,
                                        mb: 2,
                                    }}
                                />
                                <CardActions sx={{ p: 4, pt: 0, gap: 1 }}>
                                    <Button
                                        startIcon={<Eye size={18} />}
                                        onClick={() => handleViewClick(applicant)}
                                        sx={{
                                            color: '#4caf50',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            '&:hover': { bgcolor: '#e8f5e9' }
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {
                filteredApplications.length === 0 && (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                        <Typography variant="h6" sx={{ color: '#757575' }}>
                            No applications found
                        </Typography>
                    </Box>
                )
            }

            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                    },
                }}
            >
                {selectedApplicant && (
                    <>
                        <DialogTitle sx={{ bgcolor: '#E8F5E9', color: '#2E7D32', fontWeight: 700 }}>
                            Applicant Details
                        </DialogTitle>
                        <DialogContent sx={{ pt: 3 }}>
                            <Box sx={{ textAlign: 'center', mb: 3 }}>
                                <Avatar
                                    src={selectedApplicant.photo}
                                    sx={{
                                        width: 120,
                                        height: 120,
                                        margin: '0 auto 16px',
                                        border: '4px solid #E8F5E9',
                                    }}
                                />
                                <Typography variant="h5" sx={{ fontWeight: 700, color: '#2E7D32', mb: 1 }}>
                                    {selectedApplicant.name}
                                </Typography>
                                <Chip
                                    label={tempStatus.charAt(0).toUpperCase() + tempStatus.slice(1)}
                                    sx={{
                                        bgcolor: getStatusColor(tempStatus),
                                        color: 'white',
                                        fontWeight: 600,
                                    }}
                                />
                            </Box>

                            <Divider sx={{ my: 3 }} />

                            <Stack spacing={2.5}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <EmailIcon sx={{ color: '#66BB6A' }} />
                                    <Box>
                                        <Typography variant="caption" sx={{ color: '#757575' }}>
                                            Email
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {selectedApplicant.email}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <PhoneIcon sx={{ color: '#66BB6A' }} />
                                    <Box>
                                        <Typography variant="caption" sx={{ color: '#757575' }}>
                                            Phone
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {selectedApplicant.phone}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <LocationOnIcon sx={{ color: '#66BB6A' }} />
                                    <Box>
                                        <Typography variant="caption" sx={{ color: '#757575' }}>
                                            Address
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {selectedApplicant.address}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <WorkIcon sx={{ color: '#66BB6A' }} />
                                    <Box>
                                        <Typography variant="caption" sx={{ color: '#757575' }}>
                                            Job Category
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {selectedApplicant.jobCategory}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <StarIcon sx={{ color: '#66BB6A' }} />
                                    <Box>
                                        <Typography variant="caption" sx={{ color: '#757575' }}>
                                            Experience
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {selectedApplicant.experience}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box>
                                    <Typography variant="caption" sx={{ color: '#757575', mb: 1, display: 'block' }}>
                                        Skills
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {selectedApplicant.skills.map((skill, index) => (
                                            <Chip
                                                key={index}
                                                label={skill}
                                                sx={{
                                                    bgcolor: '#E8F5E9',
                                                    color: '#2E7D32',
                                                    fontWeight: 500,
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            </Stack>

                            <Divider sx={{ my: 3 }} />

                            <Box>
                                <Typography variant="subtitle2" sx={{ mb: 2, color: '#2E7D32', fontWeight: 600 }}>
                                    Change Entrolls Status
                                </Typography>
                                <Stack direction="row" spacing={2} justifyContent="center">
                                    <Button
                                        variant={tempStatus === 'pending' ? 'contained' : 'outlined'}
                                        onClick={() => handleStatusChange('pending')}
                                        sx={{
                                            borderColor: '#FFA726',
                                            color: tempStatus === 'pending' ? 'white' : '#FFA726',
                                            bgcolor: tempStatus === 'pending' ? '#FFA726' : 'transparent',
                                            '&:hover': {
                                                bgcolor: tempStatus === 'pending' ? '#FF9800' : 'rgba(255, 167, 38, 0.1)',
                                                borderColor: '#FFA726',
                                            },
                                        }}
                                    >
                                        Pending
                                    </Button>
                                    <Button
                                        variant={tempStatus === 'selected' ? 'contained' : 'outlined'}
                                        onClick={() => handleStatusChange('selected')}
                                        sx={{
                                            borderColor: '#66BB6A',
                                            color: tempStatus === 'selected' ? 'white' : '#66BB6A',
                                            bgcolor: tempStatus === 'selected' ? '#66BB6A' : 'transparent',
                                            '&:hover': {
                                                bgcolor: tempStatus === 'selected' ? '#2E7D32' : 'rgba(102, 187, 106, 0.1)',
                                                borderColor: '#66BB6A',
                                            },
                                        }}
                                    >
                                        Select
                                    </Button>
                                    <Button
                                        variant={tempStatus === 'rejected' ? 'contained' : 'outlined'}
                                        onClick={() => handleStatusChange('rejected')}
                                        sx={{
                                            borderColor: '#EF5350',
                                            color: tempStatus === 'rejected' ? 'white' : '#EF5350',
                                            bgcolor: tempStatus === 'rejected' ? '#EF5350' : 'transparent',
                                            '&:hover': {
                                                bgcolor: tempStatus === 'rejected' ? '#D32F2F' : 'rgba(239, 83, 80, 0.1)',
                                                borderColor: '#EF5350',
                                            },
                                        }}
                                    >
                                        Reject
                                    </Button>
                                </Stack>
                            </Box>
                        </DialogContent>
                        <DialogActions sx={{ p: 3, bgcolor: '#F5F5F5', gap: 2 }}>
                            <Button
                                onClick={handleCloseDialog}
                                sx={{
                                    color: '#666',
                                    textTransform: 'none',
                                    fontWeight: 600
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleSave}
                                variant="contained"
                                sx={{
                                    bgcolor: '#4caf50',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    '&:hover': { bgcolor: '#2d5f3f' }
                                }}
                            >
                                Save
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </Box >
    );
};

export default TrainerEntrolls;