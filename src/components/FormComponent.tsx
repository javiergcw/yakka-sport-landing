'use client';

import { 
  Box, 
  Typography, 
  TextField, 
  FormControl, 
  Button,
  Select,
  MenuItem,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from "@mui/material";
import { Close as CloseIcon } from '@mui/icons-material';
import React, { useState } from "react";
import { Flavor } from "@/utils/flavors/settings/model_flavor";
import { getColorsByFlavor } from "@/utils/flavors/settings";

interface FormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  workerNeeded: string;
  profession: string;
  otherRole: string;
  workerCount: string;
}

interface FormComponentProps {
  selectedFlavor: Flavor;
}

export default function FormComponent({ selectedFlavor }: FormComponentProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const flavorColors = getColorsByFlavor(selectedFlavor);
  const [openModal, setOpenModal] = useState(false);
  const [customWorkerCount, setCustomWorkerCount] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    role: '',
    workerNeeded: '',
    profession: '',
    otherRole: '',
    workerCount: ''
  });

  const getSteps = () => {
    if (formData.role === 'builder') {
      return [
        { title: 'What is your role?', description: 'Choose your role' },
        { title: 'Personal Information', description: 'Provide your basic contact details' },
        { title: 'How many workers do you need?', description: 'Select the number of workers needed' }
      ];
    } else if (formData.role === 'employee') {
      return [
        { title: 'What is your role?', description: 'Choose your role' },
        { title: 'Personal Information', description: 'Provide your basic contact details' },
        { title: 'What is your profession?', description: 'Select your profession' }
      ];
    } else {
      return [
        { title: 'What is your role?', description: 'Choose your role' },
        { title: 'Personal Information', description: 'Provide your basic contact details' },
        { title: 'Complete Profile', description: 'Add your specific information' }
      ];
    }
  };

  const steps = getSteps();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMoreClick = () => {
    setOpenModal(true);
    setCustomWorkerCount('');
  };

  const handleSaveCustomCount = () => {
    if (customWorkerCount) {
      setFormData(prev => ({
        ...prev,
        workerCount: customWorkerCount,
        workerNeeded: customWorkerCount
      }));
    }
    setOpenModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCustomWorkerCount('');
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <>
      <Box 
        sx={{ 
          p: { xs: 3, md: 6 },
          width: '100%',
          maxWidth: '600px',
          mx: 'auto'
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: '2rem', md: '2.5rem' },
              letterSpacing: '-0.02em',
              color: '#1d1d1f',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
              lineHeight: 1.1
            }}
          >
            {steps[currentStep].title}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#86868b',
              fontSize: { xs: '1rem', md: '1.125rem' },
              fontWeight: 400,
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
              mt: 1
            }}
          >
            {steps[currentStep].description}
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Paso 1: Seleccionar rol */}
          {currentStep === 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box
                onClick={() => handleInputChange('role', 'builder')}
                sx={{
                  p: 4,
                  border: '1px solid #e5e5e7',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: formData.role === 'builder' ? '#f5f5f7' : 'transparent',
                  borderColor: formData.role === 'builder' ? flavorColors?.primary : '#e5e5e7',
                  '&:hover': {
                    backgroundColor: formData.role === 'builder' ? '#f5f5f7' : '#f9f9f9',
                    borderColor: formData.role === 'builder' ? flavorColors?.primary : '#d1d1d6'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      border: '2px solid',
                      borderColor: formData.role === 'builder' ? flavorColors?.primary : '#d1d1d6',
                      backgroundColor: formData.role === 'builder' ? flavorColors?.primary : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mt: 0.5,
                      '&::after': formData.role === 'builder' ? {
                        content: '""',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: 'white'
                      } : {}
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        color: '#1d1d1f',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        mb: 1
                      }}
                    >
                      Builder
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#86868b',
                        fontSize: '1rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        lineHeight: 1.4
                      }}
                    >
                      I need to hire workers for my projects
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                onClick={() => handleInputChange('role', 'employee')}
                sx={{
                  p: 4,
                  border: '1px solid #e5e5e7',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: formData.role === 'employee' ? '#f5f5f7' : 'transparent',
                  borderColor: formData.role === 'employee' ? flavorColors?.primary : '#e5e5e7',
                  '&:hover': {
                    backgroundColor: formData.role === 'employee' ? '#f5f5f7' : '#f9f9f9',
                    borderColor: formData.role === 'employee' ? flavorColors?.primary : '#d1d1d6'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      border: '2px solid',
                      borderColor: formData.role === 'employee' ? flavorColors?.primary : '#d1d1d6',
                      backgroundColor: formData.role === 'employee' ? flavorColors?.primary : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mt: 0.5,
                      '&::after': formData.role === 'employee' ? {
                        content: '""',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: 'white'
                      } : {}
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        color: '#1d1d1f',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        mb: 1
                      }}
                    >
                      Employee
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#86868b',
                        fontSize: '1rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        lineHeight: 1.4
                      }}
                    >
                      I'm looking for work opportunities
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {/* Paso 2: Información de contacto */}
          {currentStep === 1 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <TextField
                fullWidth
                label="Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                variant="outlined"
                sx={{ 
                  '& .MuiOutlinedInput-root': { 
                    borderRadius: '12px',
                    height: '56px',
                    fontSize: '1rem',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    backgroundColor: '#f5f5f7',
                    border: '1px solid #e5e5e7',
                    '&:hover': {
                      borderColor: '#d1d1d6'
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                      borderColor: flavorColors?.primary,
                      boxShadow: `0 0 0 3px ${flavorColors?.primary}20`
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '1rem',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    color: '#86868b',
                    '&.Mui-focused': {
                      color: flavorColors?.primary
                    }
                  }
                }}
              />

              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                variant="outlined"
                sx={{ 
                  '& .MuiOutlinedInput-root': { 
                    borderRadius: '12px',
                    height: '56px',
                    fontSize: '1rem',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    backgroundColor: '#f5f5f7',
                    border: '1px solid #e5e5e7',
                    '&:hover': {
                      borderColor: '#d1d1d6'
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                      borderColor: flavorColors?.primary,
                      boxShadow: `0 0 0 3px ${flavorColors?.primary}20`
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '1rem',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    color: '#86868b',
                    '&.Mui-focused': {
                      color: flavorColors?.primary
                    }
                  }
                }}
              />

              <TextField
                fullWidth
                label="Phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                variant="outlined"
                sx={{ 
                  '& .MuiOutlinedInput-root': { 
                    borderRadius: '12px',
                    height: '56px',
                    fontSize: '1rem',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    backgroundColor: '#f5f5f7',
                    border: '1px solid #e5e5e7',
                    '&:hover': {
                      borderColor: '#d1d1d6'
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                      borderColor: flavorColors?.primary,
                      boxShadow: `0 0 0 3px ${flavorColors?.primary}20`
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '1rem',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    color: '#86868b',
                    '&.Mui-focused': {
                      color: flavorColors?.primary
                    }
                  }
                }}
              />
            </Box>
          )}

          {/* Paso 3: Completar perfil */}
          {currentStep === 2 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Campo condicional para Builder - Cantidad de trabajadores */}
              {formData.role === 'builder' && (
                <Box>
                  <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                    gap: 1,
                    width: '100%',
                    alignItems: 'center'
                  }}>
                    {[1, 2, 3, 4, 5].map((number) => (
                      <Box
                        key={number}
                        onClick={() => handleInputChange('workerCount', number.toString())}
                        sx={{
                          width: '100%',
                          height: 40,
                          borderTop: `1px solid ${flavorColors?.primary}`,
                          borderLeft: `1px solid ${flavorColors?.primary}`,
                          borderBottom: `4px solid ${flavorColors?.primary}`,
                          borderRight: `4px solid ${flavorColors?.primary}`,
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          backgroundColor: formData.workerCount === number.toString() 
                            ? flavorColors?.primary 
                            : '#ffffff',
                          color: formData.workerCount === number.toString() 
                            ? '#ffffff' 
                            : flavorColors?.primary,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: formData.workerCount === number.toString() 
                              ? flavorColors?.primary 
                              : `${flavorColors?.primary}20`
                          }
                        }}
                      >
                        <Typography variant="h6" fontWeight="bold">
                          {number}
                        </Typography>
                      </Box>
                    ))}
                    <Box
                      onClick={handleMoreClick}
                      sx={{
                        width: '100%',
                        height: 40,
                        borderTop: `1px solid ${flavorColors?.primary}`,
                        borderLeft: `1px solid ${flavorColors?.primary}`,
                        borderBottom: `4px solid ${flavorColors?.primary}`,
                        borderRight: `4px solid ${flavorColors?.primary}`,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backgroundColor: (formData.workerCount === 'more' || (formData.workerCount && !['1', '2', '3', '4', '5'].includes(formData.workerCount)))
                          ? flavorColors?.primary 
                          : '#ffffff',
                        color: (formData.workerCount === 'more' || (formData.workerCount && !['1', '2', '3', '4', '5'].includes(formData.workerCount)))
                          ? '#ffffff' 
                          : flavorColors?.primary,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: (formData.workerCount === 'more' || (formData.workerCount && !['1', '2', '3', '4', '5'].includes(formData.workerCount)))
                            ? flavorColors?.primary 
                            : `${flavorColors?.primary}20`
                        }
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {formData.workerCount && !['1', '2', '3', '4', '5'].includes(formData.workerCount) 
                          ? formData.workerCount 
                          : 'More'}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )}

              {/* Campo condicional para Employee */}
              {formData.role === 'employee' && (
                <Box>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>What is your profession?</InputLabel>
                    <Select
                      value={formData.profession}
                      onChange={(e) => handleInputChange('profession', e.target.value)}
                      label="What is your profession?"
                      MenuProps={{
                        disableScrollLock: true
                      }}
                      sx={{ 
                        '& .MuiOutlinedInput-notchedOutline': { 
                          borderRadius: 3 
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: flavorColors?.primary
                        }
                      }}
                    >
                      <MenuItem value="carpenter">Carpenter</MenuItem>
                      <MenuItem value="electrician">Electrician</MenuItem>
                      <MenuItem value="plumber">Plumber</MenuItem>
                      <MenuItem value="painter">Painter</MenuItem>
                      <MenuItem value="mason">Mason</MenuItem>
                      <MenuItem value="roofer">Roofer</MenuItem>
                      <MenuItem value="welder">Welder</MenuItem>
                      <MenuItem value="concrete-worker">Concrete Worker</MenuItem>
                      <MenuItem value="drywall-installer">Drywall Installer</MenuItem>
                      <MenuItem value="flooring-installer">Flooring Installer</MenuItem>
                      <MenuItem value="hvac-technician">HVAC Technician</MenuItem>
                      <MenuItem value="landscaper">Landscaper</MenuItem>
                      <MenuItem value="heavy-equipment-operator">Heavy Equipment Operator</MenuItem>
                      <MenuItem value="construction-foreman">Construction Foreman</MenuItem>
                      <MenuItem value="safety-inspector">Safety Inspector</MenuItem>
                      <MenuItem value="architect">Architect</MenuItem>
                      <MenuItem value="civil-engineer">Civil Engineer</MenuItem>
                      <MenuItem value="project-manager">Project Manager</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                  
                  {/* Campo Other para Employee */}
                  {formData.profession === 'other' && (
                    <TextField
                      fullWidth
                      label="Please specify your profession"
                      value={formData.otherRole}
                      onChange={(e) => handleInputChange('otherRole', e.target.value)}
                      variant="outlined"
                      placeholder="Enter your specific profession..."
                      sx={{ 
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: 3,
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: flavorColors?.primary
                      }
                    }
                  }}
                    />
                  )}
                </Box>
              )}
            </Box>
          )}

          {/* Botones de navegación */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'space-between', 
            gap: 3,
            mt: { xs: 4, md: 6 }
          }}>
            <Button
              onClick={handleBack}
              disabled={currentStep === 0}
              variant="outlined"
              sx={{ 
                borderRadius: '12px',
                height: '48px',
                px: 4,
                border: '1px solid #e5e5e7',
                color: currentStep === 0 ? '#86868b' : '#1d1d1f',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                '&:hover': {
                  backgroundColor: currentStep === 0 ? 'transparent' : '#f5f5f7',
                  borderColor: currentStep === 0 ? '#e5e5e7' : '#d1d1d6'
                },
                '&:disabled': {
                  color: '#86868b',
                  borderColor: '#e5e5e7'
                }
              }}
            >
              Back
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ 
                  height: '48px',
                  px: 4,
                  borderRadius: '12px',
                  backgroundColor: flavorColors?.primary,
                  boxShadow: 'none',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  '&:hover': {
                    backgroundColor: flavorColors?.button.primaryHover,
                    boxShadow: 'none'
                  },
                  '&:active': {
                    backgroundColor: flavorColors?.button.primaryHover
                  }
                }}
              >
                Submit
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                variant="contained"
                size="large"
                disabled={
                  (currentStep === 0 && !formData.role) ||
                  (currentStep === 1 && (!formData.name || !formData.email || !formData.phone)) ||
                  (currentStep === 2 && formData.role === 'builder' && !formData.workerCount) ||
                  (currentStep === 2 && formData.role === 'employee' && !formData.profession)
                }
                sx={{ 
                  height: '48px',
                  px: 4,
                  borderRadius: '12px',
                  backgroundColor: flavorColors?.primary,
                  boxShadow: 'none',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  '&:hover': {
                    backgroundColor: flavorColors?.button.primaryHover,
                    boxShadow: 'none'
                  },
                  '&:active': {
                    backgroundColor: flavorColors?.button.primaryHover
                  },
                  '&:disabled': {
                    backgroundColor: '#d1d1d6',
                    color: '#86868b'
                  }
                }}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Box>

      {/* Modal para cantidad personalizada */}
      <Dialog 
        open={openModal} 
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
        disableScrollLock
        sx={{
          '& .MuiDialog-paper': {
            margin: { xs: 2, sm: 4 }
          }
        }}
        PaperProps={{
          sx: {
            borderRadius: 3,
            borderTop: `1px solid ${flavorColors?.primary}`,
            borderLeft: `1px solid ${flavorColors?.primary}`,
            borderBottom: `4px solid ${flavorColors?.primary}`,
            borderRight: `4px solid ${flavorColors?.primary}`
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          fontWeight: 600
        }}>
          How many workers do you need?
          <IconButton 
            onClick={handleCloseModal}
            size="small"
            sx={{ color: flavorColors?.primary }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Enter the number of workers that you need
          </Typography>
          <TextField
            fullWidth
            type="number"
            value={customWorkerCount}
            onChange={(e) => setCustomWorkerCount(e.target.value)}
            placeholder="Enter number..."
            variant="outlined"
            sx={{ 
              '& .MuiOutlinedInput-root': { 
                borderRadius: 3,
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: flavorColors?.primary
                }
              }
            }}
          />
        </DialogContent>
        
        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={handleCloseModal}
            variant="outlined"
            sx={{ 
              borderRadius: 3,
              borderColor: flavorColors?.primary,
              color: flavorColors?.primary,
              textTransform: 'none',
              '&:hover': {
                borderColor: flavorColors?.button.primaryHover,
                backgroundColor: `${flavorColors?.primary}10`
              }
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSaveCustomCount}
            variant="contained"
            disabled={!customWorkerCount}
            sx={{
              borderRadius: 3,
              backgroundColor: flavorColors?.primary,
              boxShadow: 'none',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: flavorColors?.button.primaryHover,
                boxShadow: 'none'
              },
              '&:disabled': {
                backgroundColor: '#ccc'
              }
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
