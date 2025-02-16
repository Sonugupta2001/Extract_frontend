import { styled } from '@mui/material/styles';
import { Container, TextField, Box, Paper, Tabs, Tab } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)',
    backgroundColor: '#ffffff',
    marginBottom: theme.spacing(3),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: theme.spacing(1),
        backgroundColor: '#FAFAFA',
        transition: 'all 0.2s ease-in-out',
        '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.08)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.15)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.15)',
            borderWidth: '1px',
        },
    },
}));

export const ProductCard = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    },
}));

export const PriceChip = styled(Box)(({ theme, variant }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 1.5),
    borderRadius: theme.spacing(3),
    fontSize: '0.875rem',
    fontWeight: 500,
    backgroundColor: variant === 'discount'
        ? '#FFF4F4'
        : variant === 'current'
            ? '#F0F7FF'
            : '#F5F5F5',
    color: variant === 'discount'
        ? '#E53935'
        : variant === 'current'
            ? '#1976D2'
            : '#757575',
}));

export const DataViewTabs = styled(Tabs)(({ theme }) => ({
    '& .MuiTabs-indicator': {
        backgroundColor: '#000000',
    },
    '& .MuiTab-root': {
        textTransform: 'none',
        minWidth: 100,
        fontWeight: 500,
        fontSize: '0.875rem',
        '&.Mui-selected': {
            color: '#000000',
        },
    },
}));

export const DataViewTab = styled(Tab)({
    textTransform: 'none',
    minWidth: 100,
    fontWeight: 500,
    fontSize: '0.875rem',
});

export const CustomDataContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#f5f5f5',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    '& pre': {
        margin: 0,
        overflow: 'auto',
        maxHeight: '500px',
        fontSize: '0.875rem',
        fontFamily: 'monospace',
    },
}));