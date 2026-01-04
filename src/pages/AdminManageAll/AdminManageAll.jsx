import { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    CardActions,
    Grid,
    Avatar,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Divider,
    InputAdornment,
    Link,
    Stack,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import {
    Search,
    Language,
    Facebook,
    Twitter,
    LinkedIn,
    Instagram
} from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import { Eye } from 'lucide-react';

const AdminManage = () => {
    const [filterStatus, setFilterStatus] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [trainersData, setTrainersData] = useState([]);
    const [companiesData, setCompaniesData] = useState([]);


    const trainers = [
        {
            id: 1,
            type: 'trainer',
            name: 'John Smith',
            photo: 'https://i.pravatar.cc/150?img=12',
            contact: '+1 234-567-8900',
            email: 'john.smith@email.com',
            address: '123 Main St, New York, NY 10001',
            description: "Senior web development trainer specializing in JavaScript, Node.js, and React.",
            skills: ['JavaScript', 'Node.js', 'React', 'Backend Development'],
            experience: '8 years',
            jobCategory: 'Web Development',
            status: 'Active'
        },
        {
            id: 2,
            type: 'trainer',
            name: 'Sarah Johnson',
            photo: 'https://i.pravatar.cc/150?img=45',
            contact: '+1 234-567-8901',
            email: 'sarah.johnson@email.com',
            address: '456 Oak Ave, Los Angeles, CA 90001',
            description: "Frontend trainer focused on React, modern UI patterns, and performance optimization.",
            skills: ['React', 'Hooks', 'State Management', 'Performance Optimization'],
            experience: '5 years',
            jobCategory: 'Frontend',
            status: 'Active'
        },
        {
            id: 3,
            type: 'trainer',
            name: 'Michael Chen',
            photo: 'https://i.pravatar.cc/150?img=33',
            contact: '+1 234-567-8902',
            email: 'michael.chen@email.com',
            address: '789 Pine Rd, San Francisco, CA 94102',
            description: "Data science trainer with expertise in Python, machine learning, and analytics.",
            skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Data Visualization'],
            experience: '6 years',
            jobCategory: 'Data Science',
            status: 'Active'
        },
        {
            id: 4,
            type: 'trainer',
            name: 'Emily Davis',
            photo: 'https://i.pravatar.cc/150?img=27',
            contact: '+1 234-567-8903',
            email: 'emily.davis@email.com',
            address: '321 Design Street, Seattle, WA 98101',
            description: "Creative UI/UX trainer experienced in user-centered design and prototyping.",
            skills: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Usability Testing'],
            experience: '4 years',
            jobCategory: 'Design',
            status: 'Deactive'
        },
        {
            id: 5,
            type: 'trainer',
            name: 'David Wilson',
            photo: 'https://i.pravatar.cc/150?img=68',
            contact: '+1 234-567-8904',
            email: 'david.wilson@email.com',
            address: '555 Mobile Ave, Austin, TX 78701',
            description: "Mobile application trainer specializing in React Native and cross-platform apps.",
            skills: ['React Native', 'Mobile Development', 'Cross-platform', 'iOS', 'Android'],
            experience: '7 years',
            jobCategory: 'Mobile',
            status: 'Deactive'
        }
    ];

    const companies = [
        {
            id: 1,
            type: 'company',
            name: 'Tech Solutions Inc.',
            logo: 'https://via.placeholder.com/150/2e7d32/ffffff?text=TS',
            industry: 'Software Development',
            email: 'contact@techsolutions.com',
            contact: '+1 555-0100',
            website: 'https://techsolutions.com',
            address: '100 Tech Park, Silicon Valley, CA 94025',
            description: 'Looking for experienced React developers to join our dynamic team. Work on cutting-edge projects with modern technologies.',
            socialMedia: {
                facebook: 'https://facebook.com/techsolutions',
                twitter: 'https://twitter.com/techsolutions',
                linkedin: 'https://linkedin.com/company/techsolutions',
                instagram: 'https://instagram.com/techsolutions'
            },
            status: 'Active'
        },
        {
            id: 2,
            type: 'company',
            name: 'Digital Marketing Pro',
            logo: 'https://via.placeholder.com/150/388e3c/ffffff?text=DM',
            industry: 'Marketing',
            email: 'info@digitalmarketingpro.com',
            contact: '+1 555-0101',
            website: 'https://digitalmarketingpro.com',
            address: '250 Marketing Blvd, New York, NY 10013',
            description: 'Seeking creative digital marketing specialists to drive our online presence and engagement strategies.',
            socialMedia: {
                facebook: 'https://facebook.com/digitalmarketingpro',
                twitter: 'https://twitter.com/digitalmarketingpro',
                linkedin: 'https://linkedin.com/company/digitalmarketingpro'
            },
            status: 'Active'
        },
        {
            id: 3,
            type: 'company',
            name: 'Design Studio',
            logo: 'https://via.placeholder.com/150/43a047/ffffff?text=DS',
            industry: 'UI/UX Design',
            email: 'hello@designstudio.com',
            contact: '+1 555-0102',
            website: 'https://designstudio.com',
            address: '75 Creative Lane, Austin, TX 78701',
            description: 'Join our creative team as a UI/UX designer. Create beautiful and intuitive user experiences.',
            socialMedia: {
                instagram: 'https://instagram.com/designstudio',
                linkedin: 'https://linkedin.com/company/designstudio'
            },
            status: 'Deactive'
        },
        {
            id: 4,
            type: 'company',
            name: 'Cloud Systems Ltd',
            logo: 'https://via.placeholder.com/150/4caf50/ffffff?text=CS',
            industry: 'DevOps Engineering',
            email: 'careers@cloudsystemsltd.com',
            contact: '+1 555-0103',
            website: 'https://cloudsystemsltd.com',
            address: '500 Cloud Drive, Denver, CO 80202',
            description: 'DevOps engineer needed for cloud infrastructure management and automation projects.',
            socialMedia: {
                twitter: 'https://twitter.com/cloudsystemsltd',
                linkedin: 'https://linkedin.com/company/cloudsystemsltd'
            },
            status: 'Active'
        },
        {
            id: 5,
            type: 'company',
            name: 'Data Analytics Corp',
            logo: 'https://via.placeholder.com/150/66bb6a/ffffff?text=DA',
            industry: 'Data Science',
            email: 'jobs@dataanalyticscorp.com',
            contact: '+1 555-0104',
            website: 'https://dataanalyticscorp.com',
            address: '800 Analytics Way, Boston, MA 02101',
            description: 'Data scientist position available. Work with big data and machine learning technologies.',
            socialMedia: {
                facebook: 'https://facebook.com/dataanalyticscorp',
                linkedin: 'https://linkedin.com/company/dataanalyticscorp'
            },
            status: 'Active'
        },
        {
            id: 6,
            type: 'company',
            name: 'Mobile Apps Co',
            logo: 'https://via.placeholder.com/150/81c784/ffffff?text=MA',
            industry: 'Mobile Development',
            email: 'hiring@mobileappsco.com',
            contact: '+1 555-0105',
            website: 'https://mobileappsco.com',
            address: '1200 App Street, Portland, OR 97201',
            description: 'iOS/Android developer needed for innovative mobile application development.',
            socialMedia: {
                twitter: 'https://twitter.com/mobileappsco',
                instagram: 'https://instagram.com/mobileappsco'
            },
            status: 'Deactive'
        }
    ];


    useEffect(() => {
        setTrainersData(trainers);
        setCompaniesData(companies);
    }, []);

    const allItems = [...trainersData, ...companiesData];

    const filteredItems = allItems.filter(item => {
        const matchesFilter =
            filterStatus === 'all' ||
            (filterStatus === 'trainers' && item.type === 'trainer') ||
            (filterStatus === 'companies' && item.type === 'company');

        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    const handleViewDetails = (item) => {
        setSelectedItem(item);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedItem(null);
    };

    const handleStatusChange = (id, type) => {
        if (type === 'trainer') {
            setTrainersData(prevTrainers =>
                prevTrainers.map(trainer =>
                    trainer.id === id
                        ? { ...trainer, status: trainer.status === 'Active' ? 'Deactive' : 'Active' }
                        : trainer
                )
            );
            if (selectedItem && selectedItem.id === id && selectedItem.type === 'trainer') {
                setSelectedItem(prev => ({
                    ...prev,
                    status: prev.status === 'Active' ? 'Deactive' : 'Active'
                }));
            }
        } else if (type === 'company') {
            setCompaniesData(prevCompanies =>
                prevCompanies.map(company =>
                    company.id === id
                        ? { ...company, status: company.status === 'Active' ? 'Deactive' : 'Active' }
                        : company
                )
            );
            if (selectedItem && selectedItem.id === id && selectedItem.type === 'company') {
                setSelectedItem(prev => ({
                    ...prev,
                    status: prev.status === 'Active' ? 'Deactive' : 'Active'
                }));
            }
        }
    };

    const handleDelete = (id, type) => {
        if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
            if (type === 'trainer') {
                setTrainersData(prevTrainers =>
                    prevTrainers.filter(trainer => trainer.id !== id)
                );
            } else if (type === 'company') {
                setCompaniesData(prevCompanies =>
                    prevCompanies.filter(company => company.id !== id)
                );
            }
            handleCloseDialog();
        }
    };

    const handleSave = (id, type, updatedData) => {
        if (type === 'trainer') {
            setTrainersData(prevTrainers =>
                prevTrainers.map(trainer =>
                    trainer.id === id ? { ...trainer, ...updatedData } : trainer
                )
            );
        } else if (type === 'company') {
            setCompaniesData(prevCompanies =>
                prevCompanies.map(company =>
                    company.id === id ? { ...company, ...updatedData } : company
                )
            );
        }
        handleCloseDialog();
    };

    return (
        <Box sx={{ bgcolor: '#e8f5e9', minHeight: '100vh', p: 4 }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ mb: 3, color: "#2e7d32" }}
            >
                Admin Management
            </Typography>

            <Stack
                direction="row"
                spacing={3}
                sx={{ mb: 4, justifyContent: "flex-end" }}>

                <Grid item xs={12} md={4}>
                    <FormControl fullWidth sx={{ bgcolor: 'white', borderRadius: 2 }}>
                        <InputLabel sx={{
                            color: filterStatus ? '#2E7D32' : 'inherit',
                            '&.Mui-focused': {
                                color: '#2E7D32',
                            }
                        }} >
                            Filter by Type
                        </InputLabel>
                        <Select
                            value={filterStatus}
                            label="Filter by Type"
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
                            <MenuItem value="all">All Type</MenuItem>
                            <MenuItem value="trainers">Trainers</MenuItem>
                            <MenuItem value="companies">Companies</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        placeholder="Search by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search size={20} color="#4caf50" />
                                </InputAdornment>
                            ),
                        }}
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
                    />
                </Grid>


            </Stack>


            <Grid container spacing={8} justifyContent="space-evenly">
                {filteredItems.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={`${item.type}-${item.id}`}>
                        <Card
                            sx={{
                                p: 2,
                                borderLeft: "10px solid #2e7d32",
                                backgroundColor: "#ffffff",
                                borderRadius: 3,
                                boxShadow: 3,
                                height: "300px",
                                width: "250px",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                "&:hover": {
                                    transform: "translateY(-7px)",
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                                <Avatar
                                    src={item.type === 'trainer' ? item.photo : item.logo}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        margin: '0 auto 16px',
                                        border: '4px solid #E8F5E9',
                                    }}
                                />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#2E7D32', mb: 1 }}>
                                        {item.name}
                                    </Typography>

                                    {item.type === 'trainer' && (
                                        <Typography variant="body2" sx={{ color: '#616161', mb: 2 }}>
                                            {item.jobCategory}
                                        </Typography>
                                    )}

                                    {item.type === 'company' && (
                                        <Typography variant="body2" sx={{ color: '#616161', mb: 2 }}>
                                            {item.industry}
                                        </Typography>
                                    )}
                                </Box>

                                <Chip
                                    label={item.status}
                                    sx={{
                                        width: 150,
                                        backgroundColor:
                                            item.status === "Active" ? "#4caf50" : "#9e9e9e",
                                        color: "#ffffff",
                                        fontWeight: 600,
                                        mb: 2,
                                    }}
                                />

                                <CardActions sx={{ p: 4, pt: 0, gap: 1 }}>
                                    <Button
                                        startIcon={<Eye size={18} />}
                                        onClick={() => handleViewDetails(item)}
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

            {filteredItems.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="h6" color="text.secondary">
                        No results found
                    </Typography>
                </Box>
            )}

            <Dialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                    },
                }}
            >
                {selectedItem && (
                    <>
                        <DialogTitle sx={{ bgcolor: '#e8f5e9', color: '#2E7D32', fontWeight: 700 }}>
                            {selectedItem.type === 'trainer' ? 'Trainer Details' : 'Company Details'}
                        </DialogTitle>
                        <DialogContent sx={{ pt: 3 }}>
                            <Box sx={{ textAlign: 'center', mb: 3 }}>
                                <Avatar
                                    src={selectedItem.type === 'trainer' ? selectedItem.photo : selectedItem.logo}
                                    sx={{ width: 120, height: 120, margin: '0 auto 16px', border: '4px solid #E8F5E9', }}
                                />
                                <Typography variant="h5" sx={{ fontWeight: 700, color: '#2E7D32', mb: 1 }}>
                                    {selectedItem.name}
                                </Typography>
                                <Chip
                                    label={selectedItem.status === 'Active' ? 'Active' : 'Deactive'}
                                    color={selectedItem.status === 'Active' ? 'success' : 'default'}
                                    sx={{ mt: 1, fontWeight: 600 }}
                                />
                            </Box>

                            <Divider sx={{ my: 3 }} />

                            {selectedItem.type === 'trainer' ? (
                                <Stack spacing={2.5}>
                                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <EmailIcon sx={{ color: '#66BB6A' }} />
                                        <Box>
                                            <Typography variant="caption" sx={{ color: '#757575' }}>
                                                Email
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                {selectedItem.email}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <PhoneIcon sx={{ color: '#66BB6A' }} />
                                        <Box>
                                            <Typography variant="caption" sx={{ color: '#757575' }}>
                                                Phone
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                {selectedItem.contact}
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
                                                {selectedItem.address}
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
                                                {selectedItem.jobCategory}
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
                                                {selectedItem.experience}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box>
                                        <Typography variant="caption" sx={{ color: '#757575', mb: 1, display: 'block' }}>
                                            Skills
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {selectedItem.skills.map((skill, index) => (
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
                            ) : (
                                <Stack spacing={2.5}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <WorkIcon sx={{ color: '#66BB6A' }} />
                                        <Box>
                                            <Typography variant="caption" sx={{ color: '#757575' }}>
                                                Industry
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                {selectedItem.industry}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <EmailIcon sx={{ color: '#66BB6A' }} />
                                        <Box>
                                            <Typography variant="caption" sx={{ color: '#757575' }}>
                                                Email
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                {selectedItem.email}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <PhoneIcon sx={{ color: '#66BB6A' }} />
                                        <Box>
                                            <Typography variant="caption" sx={{ color: '#757575' }}>
                                                Contact
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                {selectedItem.contact}
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
                                                {selectedItem.address}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Language sx={{ color: '#66BB6A' }} />
                                        <Box>
                                            <Typography variant="caption" sx={{ color: '#757575' }}>
                                                Web Site
                                            </Typography>
                                            <Typography>
                                                <Link href={selectedItem.website} target="_blank" rel="noopener" sx={{ color: '#2e7d32' }}>
                                                    {selectedItem.website}
                                                </Link>
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ mb: 2 }}>
                                        <Typography fontWeight={600} sx={{ mb: 1, color: '#1b5e20' }}>Description:</Typography>
                                        <Typography variant="body2" color="text.secondary">{selectedItem.description}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography fontWeight={600} sx={{ mb: 1, color: '#1b5e20' }}>Social Media:</Typography>
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            {selectedItem.socialMedia.facebook && (
                                                <IconButton component="a" href={selectedItem.socialMedia.facebook} target="_blank" sx={{ color: '#1877f2' }}>
                                                    <Facebook />
                                                </IconButton>
                                            )}
                                            {selectedItem.socialMedia.twitter && (
                                                <IconButton component="a" href={selectedItem.socialMedia.twitter} target="_blank" sx={{ color: '#1da1f2' }}>
                                                    <Twitter />
                                                </IconButton>
                                            )}
                                            {selectedItem.socialMedia.linkedin && (
                                                <IconButton component="a" href={selectedItem.socialMedia.linkedin} target="_blank" sx={{ color: '#0077b5' }}>
                                                    <LinkedIn />
                                                </IconButton>
                                            )}
                                            {selectedItem.socialMedia.instagram && (
                                                <IconButton component="a" href={selectedItem.socialMedia.instagram} target="_blank" sx={{ color: '#e4405f' }}>
                                                    <Instagram />
                                                </IconButton>
                                            )}
                                        </Box>
                                    </Box>
                                </Stack>
                            )}


                            <Divider sx={{ my: 3 }} />

                            <Box>
                                <Typography variant="subtitle2" sx={{ mb: 2, color: '#2E7D32', fontWeight: 600 }}>
                                    Chanage Status
                                </Typography>
                                <Stack direction="row" spacing={2} justifyContent="center">
                                    <Button
                                        variant="outlined"
                                        onClick={() => handleStatusChange(selectedItem.id, selectedItem.type)}
                                        sx={{
                                            borderColor: '#2e7d32',
                                            color: '#2e7d32',
                                            '&:hover': { borderColor: '#1b5e20', bgcolor: '#e8f5e9' }
                                        }}
                                    >
                                        {selectedItem.status === 'Active' ? 'Deactivate' : 'Activate'}
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
                                onClick={() => handleDelete(selectedItem.id, selectedItem.type)}
                                variant="contained"
                                sx={{
                                    bgcolor: '#ac070aff',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    '&:hover': { bgcolor: '#640505ff' }
                                }}
                            >
                                Delete
                            </Button>
                        </DialogActions>

                    </>
                )}
            </Dialog>
        </Box >
    );
};

export default AdminManage;