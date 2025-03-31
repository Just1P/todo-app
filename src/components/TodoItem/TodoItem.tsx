import { Todo, TodoId } from "@/types/todo.type";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";

const TodoItem = ({
  item,
  handleUpdate,
  handleDelete,
}: {
  item: Todo;
  handleUpdate: (id: TodoId) => void;
  handleDelete: (id: TodoId) => void;
}) => {
  const { id, label, status } = item;
  return (
    <TableRow data-testid="todo-item">
      <TableCell>{label}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell className="flex justify-end gap-2">
        <Button
          onClick={() => handleUpdate(id)}
          style={{
            cursor: "pointer",
          }}
        >
          Modifier
        </Button>
        <Button
          variant="destructive"
          onClick={() => handleDelete(id)}
          style={{
            cursor: "pointer",
          }}
          data-testid="button-delete"
        >
          Supprimer
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TodoItem;
