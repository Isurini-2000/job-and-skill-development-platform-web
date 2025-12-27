import { useState } from 'react';
import {
    Box,
    Container,
    Paper,
    Typography,
    Avatar,
    Divider,
    Button,
    IconButton,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField
} from '@mui/material';
import {
    Email,
    Phone,
    LocationOn,
    Facebook,
    Twitter,
    Instagram,
    Edit,
    Business,
} from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Trash2, Lock } from 'lucide-react';

const TrainerProfile = () => {
    const [trainerData, setTrainerData] = useState({
        name: 'John Smith',
        photo: 'https://i.pravatar.cc/300?img=12',
        industry: 'Corporate Training & Development',
        email: 'john.smith@example.com',
        phone: '+1 (555) 123-4567',
        address: '123 Business Street, Suite 100, New York, NY 10001',
        description: 'Experienced corporate trainer with over 10 years of expertise in leadership development, team building, and professional skills training. Specialized in creating engaging learning experiences that drive measurable results and organizational growth.',
        socialMedia: {
            linkedin: 'https://linkedin.com/in/johnsmith',
            twitter: 'https://twitter.com/johnsmith',
            facebook: 'https://facebook.com/johnsmith',
            instagram: 'https://instagram.com/johnsmith'
        }
    });

    const [openEdit, setOpenEdit] = useState(false);
    const [editForm, setEditForm] = useState(trainerData);


    const handleEditProfile = () => {
        setEditForm(trainerData);
        setOpenEdit(true);
    };

    const handleInputChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        setTrainerData(editForm);
        setOpenEdit(false);
    };


    const handleChangePassword = () => {
        console.log('Change password clicked');
    };

    const handleDeleteAccount = () => {
        console.log('Delete account clicked');
    };

    const InfoRow = ({ icon: Icon, label, value, link }) => (
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
            <Icon sx={{ color: '#2e7d32', mr: 2, mt: 0.5, fontSize: 24 }} />
            <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ color: '#666', fontWeight: 500, mb: 0.5 }}>
                    {label}
                </Typography>
                {link ? (
                    <Typography
                        variant="body1"
                        component="a"
                        href={link}
                        target="_blank"
                        sx={{
                            color: '#2e7d32',
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' }
                        }}
                    >
                        {value}
                    </Typography>
                ) : (
                    <Typography variant="body1" sx={{ color: '#333' }}>
                        {value}
                    </Typography>
                )}
            </Box>
        </Box>
    );

    return (
        <Box sx={{ bgcolor: '#e8f5e9', minHeight: '100vh', p: 4 }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ mb: 3, color: "#2e7d32" }}
            >
                Manage Your Details
            </Typography>
            <Container maxWidth="md">
                <Paper
                    elevation={0}
                    sx={{
                        p: 2,
                        borderLeft: "15px solid #2e7d32",
                        backgroundColor: "#ffffff",
                        borderRadius: 3,
                        boxShadow: 3,
                        position: 'relative'
                    }}
                >
                    <IconButton
                        onClick={handleEditProfile}
                        sx={{
                            position: 'absolute',
                            top: 25,
                            right: 25,
                            bgcolor: '#2e7d32',
                            color: 'white',
                            '&:hover': { bgcolor: '#1b5e20' }
                        }}
                    >
                        <Edit />
                    </IconButton>

                    <Box sx={{ px: 4, pb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: -6, mb: 4 }}>
                            <Avatar
                                src={trainerData.photo}
                                sx={{
                                    marginTop: '50px',
                                    width: 120,
                                    height: 120,
                                    border: '4px solid white',
                                    boxShadow: 3,
                                }}
                            />
                            <Box sx={{ ml: 3, mb: 1 }}>
                                <Typography variant="h4" sx={{ fontWeight: 600, color: '#2e7d32', mb: 0.5 }}>
                                    {trainerData.name}
                                </Typography>
                                <Chip
                                    icon={<Business sx={{ fontSize: 18 }} />}
                                    label={trainerData.industry}
                                    sx={{
                                        bgcolor: '#e8f5e9',
                                        color: '#2e7d32',
                                        fontWeight: 500,
                                    }}
                                />
                            </Box>
                        </Box>

                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 3 }}>
                            Contact Information
                        </Typography>

                        <InfoRow
                            icon={Email}
                            label="Email"
                            value={trainerData.email}
                            link={`mailto:${trainerData.email}`}
                        />
                        <InfoRow
                            icon={Phone}
                            label="Phone"
                            value={trainerData.phone}
                            link={`tel:${trainerData.phone}`}
                        />
                        <InfoRow
                            icon={LocationOn}
                            label="Address"
                            value={trainerData.address}
                        />

                        <Divider sx={{ my: 4 }} />

                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 2 }}>
                            About Me
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: '#555', lineHeight: 1.8, mb: 4 }}
                        >
                            {trainerData.description}
                        </Typography>

                        <Divider sx={{ my: 4 }} />

                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 3 }}>
                            Social Media
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1.5, mb: 4 }}>
                            <IconButton
                                href={trainerData.socialMedia.facebook}
                                target="_blank"
                                sx={{
                                    bgcolor: '#e8f5e9',
                                    color: '#2e7d32',
                                    '&:hover': { bgcolor: '#2e7d32', color: 'white' }
                                }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                href={trainerData.socialMedia.twitter}
                                target="_blank"
                                sx={{
                                    bgcolor: '#e8f5e9',
                                    color: '#2e7d32',
                                    '&:hover': { bgcolor: '#2e7d32', color: 'white' }
                                }}
                            >
                                <Twitter />
                            </IconButton>
                            <IconButton
                                href={trainerData.socialMedia.linkedin}
                                target="_blank"
                                sx={{
                                    bgcolor: '#e8f5e9',
                                    color: '#2e7d32',
                                    '&:hover': { bgcolor: '#2e7d32', color: 'white' }
                                }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton
                                href={trainerData.socialMedia.instagram}
                                target="_blank"
                                sx={{
                                    bgcolor: '#e8f5e9',
                                    color: '#2e7d32',
                                    '&:hover': { bgcolor: '#2e7d32', color: 'white' }
                                }}
                            >
                                <Instagram />
                            </IconButton>
                        </Box>

                        <Divider sx={{ my: 4 }} />

                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Button
                                startIcon={<Lock size={20} />}
                                onClick={handleChangePassword}
                                sx={{
                                    color: '#2e7d32',
                                    px: 4,
                                    py: 1.5,
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    '&:hover': {
                                        bgcolor: '#e8f5e9'
                                    }
                                }}
                            >
                                Change Password
                            </Button>

                            <Button
                                startIcon={<Trash2 size={20} />}
                                onClick={handleDeleteAccount}
                                sx={{
                                    color: '#d32f2f',
                                    px: 4,
                                    py: 1.5,
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    '&:hover': {
                                        bgcolor: '#ffebee'
                                    }
                                }}
                            >
                                Delete Account
                            </Button>
                        </Box>
                    </Box>

                    <Dialog open={openEdit} onClose={() => setOpenEdit(false)} fullWidth maxWidth="sm">
                        <DialogTitle sx={{ bgcolor: '#e8f5e9', color: '#2d5f3f', fontWeight: 700 }}>
                            Edit Profile Details
                        </DialogTitle>

                        <DialogContent dividers>
                            <TextField
                                label="Trainer Name"
                                name="name"
                                value={editForm.name}
                                onChange={handleInputChange}
                                fullWidth
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
                                label="Industry"
                                name="industry"
                                value={editForm.industry}
                                onChange={handleInputChange}
                                fullWidth
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
                                label="Email"
                                name="email"
                                value={editForm.email}
                                onChange={handleInputChange}
                                fullWidth
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
                                label="Phone"
                                name="phone"
                                value={editForm.phone}
                                onChange={handleInputChange}
                                fullWidth
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
                                label="Address"
                                name="address"
                                value={editForm.address}
                                onChange={handleInputChange}
                                fullWidth
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
                                label="Description"
                                name="description"
                                value={editForm.description}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                                rows={3}
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
                                label="Photo URL"
                                name="photo"
                                value={editForm.photo}
                                onChange={handleInputChange}
                                fullWidth
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
                        </DialogContent>

                        <DialogActions sx={{ p: 2, gap: 1 }}>
                            <Button
                                onClick={() => setOpenEdit(false)}
                                sx={{
                                    color: '#666',
                                    textTransform: 'none',
                                    fontWeight: 600
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleSave}
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

                </Paper>
            </Container>
        </Box>
    );
};

export default TrainerProfile;