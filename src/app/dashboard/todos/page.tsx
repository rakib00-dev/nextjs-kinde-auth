import Button from '@/components/Button';

async function fetchAllData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-cache',
  });
  return await res.json();
}

const TodosPage = async () => {
  const todos = await fetchAllData();

  return (
    <>
      <div className="text-4xl">I am a todosPage</div>
      <Button />
      {todos &&
        todos?.map((e: any) => (
          <div
            className="p-4 border-gray-700 shadow-lg mb-4 rounded-xl"
            key={e.id}
          >
            <h4>{e.name}</h4>
          </div>
        ))}
    </>
  );
};

export default TodosPage;
