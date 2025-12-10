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


export default function CompanyMyJob() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      companyName: 'Tech Solutions Inc',
      logo: "https://via.placeholder.com/60/2e7d32/ffffff?text=TS",
      category: 'Software Development',
      website: 'https://techsolutions.com',
      description: 'Looking for experienced full-stack developers to join our growing team.',
      jobType: 'Full-time',
      status: 'Active'
    },
    {
      id: 2,
      companyName: 'Tech Solutions Inc',
      logo: "https://via.placeholder.com/60/2e7d32/ffffff?text=TS",
      category: 'Marketing',
      website: 'https://techsolutions.com',
      description: 'Seeking creative marketing specialists for various client projects.',
      jobType: 'Contract',
      status: 'Active'
    },
    {
      id: 3,
      companyName: 'Tech Solutions Inc',
      logo: "https://via.placeholder.com/60/2e7d32/ffffff?text=TS",
      category: 'Finance',
      website: 'https://techsolutions.com',
      description: 'Financial analyst position available for qualified candidates.',
      jobType: 'Part-time',
      status: 'Inactive'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    logo: '',
    category: '',
    website: '',
    description: '',
    jobType: 'Full-time',
    status: 'active'
  });

  const filteredJobs = jobs.filter(job =>
    job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenDialog = (job = null) => {
    if (job) {
      setEditingJob(job);
      setFormData(job);
    } else {
      setEditingJob(null);
      setFormData({
        companyName: 'Tech Solutions Inc',
        logo: "https://via.placeholder.com/60/2e7d32/ffffff?text=TS",
        category: '',
        website: 'https://techsolutions.com',
        description: '',
        jobType: 'Full-time',
        status: 'active'
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingJob(null);
  };

  const handleSave = () => {
    if (editingJob) {
      setJobs(jobs.map(job => job.id === editingJob.id ? { ...formData, id: job.id } : job));
    } else {
      setJobs([...jobs, { ...formData, id: Date.now() }]);
    }
    handleCloseDialog();
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#e8f5e9", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, color: "#2e7d32" }}
      >
        My Company Jobs
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        sx={{ mb: 4, justifyContent: "flex-end" }}
      >
        <TextField
          variant="outlined"
          placeholder="Search jobs by category, or description..."
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

      <Grid container spacing={8} justifyContent="space-evenly">
        {filteredJobs.map((job) => (
          <Grid item xs={12} md={6} key={job.id}>
            <Card
              sx={{
                p: 2,
                borderLeft: "10px solid #2e7d32",
                backgroundColor: "#ffffff",
                borderRadius: 3,
                boxShadow: 3,
                height: "250px",
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
                    label={job.jobType}
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

              <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
                <Button
                  startIcon={<Edit size={18} />}
                  onClick={() => handleOpenDialog(job)}
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
                  onClick={() => handleDelete(job.id)}
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
          {editingJob ? 'Edit Job' : 'Add New Job'}
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Company Name"
            value={formData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
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
            label="Company Logo URL"
            value={formData.logo}
            onChange={(e) => handleInputChange('logo', e.target.value)}
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
            label="Job Category"
            value={formData.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
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
            label="Company Website"
            value={formData.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
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
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
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
            <InputLabel sx={{ '&.Mui-focused': { color: '#2d5f3f' } }}>Job Type</InputLabel>
            <Select
              value={formData.jobType}
              label="Job Type"
              onChange={(e) => handleInputChange('jobType', e.target.value)}
              sx={{
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#4caf50'
                }
              }}
            >
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel sx={{ '&.Mui-focused': { color: '#2d5f3f' } }}>Status</InputLabel>
            <Select
              value={formData.status}
              label="Status"
              onChange={(e) => handleInputChange('status', e.target.value)}
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
      </Dialog>
    </Box>
  );
}