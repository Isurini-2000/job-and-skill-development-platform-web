import { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    CardActions,
    Grid,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    InputAdornment,
    Avatar,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Stack
} from '@mui/material';
import {
    Search,
    Edit,
    Trash2,
    Plus,
} from 'lucide-react';
import LanguageIcon from "@mui/icons-material/Language";


const TrainerMyCourse = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentCourse, setCurrentCourse] = useState(null);
    const [courses, setCourses] = useState([
        {
            id: 1,
            trainerName: 'Sarah Johnson',
            trainerPhoto: 'https://i.pravatar.cc/150?img=45',
            category: 'Web Development',
            title: 'Advanced React & Node.js',
            description: 'Master modern web development with React and Node.js. Build full-stack applications.',
            status: 'Active'
        },
        {
            id: 2,
            trainerName: 'Sarah Johnson',
            trainerPhoto: 'https://i.pravatar.cc/150?img=45',
            category: 'Data Science',
            title: 'Python for Data Analysis',
            description: 'Learn data analysis techniques using Python, pandas, and visualization libraries.',
            status: 'Active'
        },
        {
            id: 3,
            trainerName: 'Sarah Johnson',
            trainerPhoto: 'https://i.pravatar.cc/150?img=45',
            category: 'Mobile Development',
            title: 'Flutter App Development',
            description: 'Create beautiful cross-platform mobile apps with Flutter and Dart.',
            status: 'Inactive'
        }
    ]);

    const [formData, setFormData] = useState({
        trainerName: '',
        trainerPhoto: '',
        category: '',
        title: '',
        description: '',
        status: 'active'
    });


    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.trainerName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleOpenDialog = (course = null) => {
        if (course) {
            setEditMode(true);
            setCurrentCourse(course);
            setFormData(course);
        } else {
            setEditMode(false);
            setCurrentCourse(null);
            setFormData({
                trainerName: 'Sarah Johnson',
                trainerPhoto: 'https://i.pravatar.cc/150?img=45',
                category: '',
                title: '',
                description: '',
                status: 'active'
            });
        }
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEditMode(false);
        setCurrentCourse(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveCourse = () => {
        if (editMode) {
            setCourses(courses.map(c => c.id === currentCourse.id ? { ...formData, id: c.id } : c));
        } else {
            setCourses([...courses, { ...formData, id: Date.now() }]);
        }
        handleCloseDialog();
    };

    const handleDeleteCourse = (id) => {
        setCourses(courses.filter(c => c.id !== id));
    };

    return (
        <Box sx={{ p: 4, backgroundColor: "#e8f5e9", minHeight: "100vh" }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ mb: 3, color: "#2e7d32" }}
            >
                My Courses
            </Typography>

            <Stack
                direction="row"
                spacing={3}
                sx={{ mb: 4, justifyContent: "flex-end" }}
            >
                <TextField
                    variant="outlined"
                    placeholder="Search courses by title, category, or trainer..."
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

            <Grid container spacing={8} justifyContent="space-evenly">
                {filteredCourses.map((course) => (
                    <Grid item xs={12} md={6} key={course.id}>
                        <Card
                            sx={{
                                p: 2,
                                borderLeft: "10px solid #2e7d32",
                                backgroundColor: "#ffffff",
                                borderRadius: 3,
                                boxShadow: 3,
                                height: "270px",
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
                                <Typography variant="h6" gutterBottom fontWeight={600} color="#2e7d32">
                                    {course.title}
                                </Typography>

                                <Typography sx={{ mt: 2, color: "#555" }}>
                                    {course.description}
                                </Typography>

                                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                                    <Chip
                                        label={course.status}
                                        sx={{
                                            backgroundColor:
                                                course.status === "Active" ? "#4caf50" : "#9e9e9e",
                                            color: "#ffffff",
                                            fontWeight: "bold",
                                        }}
                                    />
                                </Stack>
                            </CardContent>

                            <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
                                <Button
                                    startIcon={<Edit size={18} />}
                                    onClick={() => handleOpenDialog(course)}
                                    sx={{
                                        color: '#4caf50',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        '&:hover': { bgcolor: '#e8f5e9' }
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    startIcon={<Trash2 size={18} />}
                                    onClick={() => handleDeleteCourse(course.id)}
                                    sx={{
                                        color: '#f44336',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        '&:hover': { bgcolor: '#ffebee' }
                                    }}
                                >
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ position: 'fixed', bottom: 32, right: 32 }}>
                <Button
                    variant="contained"
                    startIcon={<Plus size={20} />}
                    onClick={() => handleOpenDialog()}
                    sx={{
                        bgcolor: '#4caf50',
                        px: 3,
                        py: 1.5,
                        borderRadius: 2,
                        boxShadow: '0 4px 12px rgba(76, 175, 80, 0.4)',
                        '&:hover': {
                            bgcolor: '#2d5f3f',
                            boxShadow: '0 6px 16px rgba(76, 175, 80, 0.5)'
                        },
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '1rem'
                    }}
                >
                    Add New
                </Button>
            </Box>

            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ bgcolor: '#e8f5e9', color: '#2d5f3f', fontWeight: 700 }}>
                    {editMode ? 'Edit Course' : 'Add New Course'}
                </DialogTitle>
                <DialogContent sx={{ mt: 2 }}>
                    <TextField
                        fullWidth
                        label="Trainer Name"
                        name="trainerName"
                        value={formData.trainerName}
                        onChange={handleInputChange}
                        margin="normal"
                        sx={{
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#4caf50'
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#2d5f3f'
                            }
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Trainer Photo URL"
                        name="trainerPhoto"
                        value={formData.trainerPhoto}
                        onChange={handleInputChange}
                        margin="normal"
                        sx={{
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#4caf50'
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#2d5f3f'
                            }
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Course Title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        margin="normal"
                        sx={{
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#4caf50'
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#2d5f3f'
                            }
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        margin="normal"
                        sx={{
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#4caf50'
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#2d5f3f'
                            }
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        margin="normal"
                        multiline
                        rows={3}
                        sx={{
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#4caf50'
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#2d5f3f'
                            }
                        }}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel sx={{ '&.Mui-focused': { color: '#2d5f3f' } }}>Status</InputLabel>
                        <Select
                            value={formData.status}
                            name="status"
                            label="Status"
                            onChange={handleInputChange}
                            sx={{
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#4caf50'
                                }
                            }}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions sx={{ p: 2, gap: 1 }}>
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
                        onClick={handleSaveCourse}
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
            </Dialog>
        </Box>
    );
}

export default TrainerMyCourse;

