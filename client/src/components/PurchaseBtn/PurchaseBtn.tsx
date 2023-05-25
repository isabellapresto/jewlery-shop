import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';

export default function PurchaseBtn() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
        Köp
      </Button>
    </Stack>
  );
}