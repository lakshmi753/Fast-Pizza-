import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItems } from './cartSlice';

function DeleteItems({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItems(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItems;
