import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useUsers } from '@/context/UserContext';

function Listing() {
  const handleDelete = (id: string) => {
    console.log(`Delete user with id: ${id}`);
  }
  const onEdit = (id: string) => {
    console.log(`Edit user with id: ${id}`);
  }
  const { users } = useUsers();
  const user = users[0];
  if (!user) return <div>No user found</div>;
  return (
    <div>
      <div>Listing User</div>
    <TableRow>
  <TableCell>
  </TableCell>
  <TableCell>
    <img src={user.img} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
  </TableCell>
  <TableCell className="text-right space-x-2">
    <Button variant="ghost" size="sm" onClick={() => onEdit(user.id)}>
      Edit
    </Button>
    <Button
      variant="destructive"
      size="sm"
      onClick={() => handleDelete(user.id)}  // we'll improve with AlertDialog
    >
      Delete
    </Button>
  </TableCell>
</TableRow>
    </div>
  )
}

export default Listing