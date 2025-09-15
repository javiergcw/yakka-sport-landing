'use client';

import { 
  Box, 
  Typography, 
  TextField, 
  FormControl, 
  FormLabel, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  Paper,
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
import { Flavor, flavorConfigs } from "@/types/flavor";

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
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 2, md: 4 },
          backgroundColor: '#ffffff',
          borderRadius: 3,
          width: '100%',
          borderTop: `1px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
          borderLeft: `1px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
          borderBottom: `4px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
          borderRight: `4px solid ${flavorConfigs[selectedFlavor].primaryColor}`
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 2, md: 3 } }}>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: '1.5rem', md: '2.125rem' }
            }}
          >
            {steps[currentStep].title}
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Paso 1: Seleccionar rol */}
          {currentStep === 0 && (
            <FormControl component="fieldset">
              <RadioGroup
                value={formData.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
                sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' }, 
                  gap: 2,
                  justifyContent: { xs: 'flex-start', sm: 'center' },
                  alignItems: { xs: 'flex-start', sm: 'center' }
                }}
              >
                <FormControlLabel 
                  value="builder" 
                  control={
                    <Radio 
                      sx={{ 
                        color: flavorConfigs[selectedFlavor].primaryColor,
                        '&.Mui-checked': {
                          color: flavorConfigs[selectedFlavor].primaryColor,
                        }
                      }} 
                    />
                  } 
                  label={
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Builder
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        I need to hire workers for my projects
                      </Typography>
                    </Box>
                  }
                />
                <FormControlLabel 
                  value="employee" 
                  control={
                    <Radio 
                      sx={{ 
                        color: flavorConfigs[selectedFlavor].primaryColor,
                        '&.Mui-checked': {
                          color: flavorConfigs[selectedFlavor].primaryColor,
                        }
                      }} 
                    />
                  } 
                  label={
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Employee
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        I'm looking for work opportunities
                      </Typography>
                    </Box>
                  }
                />
              </RadioGroup>
            </FormControl>
          )}

          {/* Paso 2: Información de contacto */}
          {currentStep === 1 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                fullWidth
                label="Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                variant="outlined"
                sx={{ 
                  '& .MuiOutlinedInput-root': { 
                    borderRadius: 3,
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: flavorConfigs[selectedFlavor].primaryColor
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
                    borderRadius: 3,
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: flavorConfigs[selectedFlavor].primaryColor
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
                    borderRadius: 3,
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: flavorConfigs[selectedFlavor].primaryColor
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
                          borderTop: `1px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
                          borderLeft: `1px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
                          borderBottom: `4px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
                          borderRight: `4px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          backgroundColor: formData.workerCount === number.toString() 
                            ? flavorConfigs[selectedFlavor].primaryColor 
                            : '#ffffff',
                          color: formData.workerCount === number.toString() 
                            ? '#ffffff' 
                            : flavorConfigs[selectedFlavor].primaryColor,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: formData.workerCount === number.toString() 
                              ? flavorConfigs[selectedFlavor].primaryColor 
                              : `${flavorConfigs[selectedFlavor].primaryColor}20`
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
                        borderTop: `1px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
                        borderLeft: `1px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
                        borderBottom: `4px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
                        borderRight: `4px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backgroundColor: (formData.workerCount === 'more' || (formData.workerCount && !['1', '2', '3', '4', '5'].includes(formData.workerCount)))
                          ? flavorConfigs[selectedFlavor].primaryColor 
                          : '#ffffff',
                        color: (formData.workerCount === 'more' || (formData.workerCount && !['1', '2', '3', '4', '5'].includes(formData.workerCount)))
                          ? '#ffffff' 
                          : flavorConfigs[selectedFlavor].primaryColor,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: (formData.workerCount === 'more' || (formData.workerCount && !['1', '2', '3', '4', '5'].includes(formData.workerCount)))
                            ? flavorConfigs[selectedFlavor].primaryColor 
                            : `${flavorConfigs[selectedFlavor].primaryColor}20`
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
                          borderColor: flavorConfigs[selectedFlavor].primaryColor
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
                        borderColor: flavorConfigs[selectedFlavor].primaryColor
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
            gap: 2,
            mt: { xs: 2, md: 3 }
          }}>
            <Button
              onClick={handleBack}
              disabled={currentStep === 0}
              variant="outlined"
              sx={{ 
                borderRadius: 3,
                borderColor: flavorConfigs[selectedFlavor].primaryColor,
                color: flavorConfigs[selectedFlavor].primaryColor,
                boxShadow: 'none',
                textTransform: 'none',
                '&:hover': {
                  borderColor: flavorConfigs[selectedFlavor].buttonHoverColor,
                  backgroundColor: `${flavorConfigs[selectedFlavor].primaryColor}10`
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
                  py: 1.5,
                  borderRadius: 3,
                  backgroundColor: flavorConfigs[selectedFlavor].primaryColor,
                  boxShadow: 'none',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: flavorConfigs[selectedFlavor].buttonHoverColor
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
                  py: 1.5,
                  borderRadius: 3,
                  backgroundColor: flavorConfigs[selectedFlavor].primaryColor,
                  boxShadow: 'none',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: flavorConfigs[selectedFlavor].buttonHoverColor
                  }
                }}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Paper>

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
            borderTop: `1px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
            borderLeft: `1px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
            borderBottom: `4px solid ${flavorConfigs[selectedFlavor].primaryColor}`,
            borderRight: `4px solid ${flavorConfigs[selectedFlavor].primaryColor}`
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
            sx={{ color: flavorConfigs[selectedFlavor].primaryColor }}
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
                  borderColor: flavorConfigs[selectedFlavor].primaryColor
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
              borderColor: flavorConfigs[selectedFlavor].primaryColor,
              color: flavorConfigs[selectedFlavor].primaryColor,
              textTransform: 'none',
              '&:hover': {
                borderColor: flavorConfigs[selectedFlavor].buttonHoverColor,
                backgroundColor: `${flavorConfigs[selectedFlavor].primaryColor}10`
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
              backgroundColor: flavorConfigs[selectedFlavor].primaryColor,
              boxShadow: 'none',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: flavorConfigs[selectedFlavor].buttonHoverColor,
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
