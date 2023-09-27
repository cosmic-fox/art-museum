import { useFormik } from "formik";
import { FC } from "react";
import { useTitle } from "react-use";
import { useAddTodoMutation } from "../../lib/mutations/addTodoMutation.ts";
import { useTodosQuery } from "../../lib/queries/useTodosQuery.ts";
import { DefaultLayout } from "../layouts/defaultLayout.tsx";

interface HomeProps {}
export const Home: FC<HomeProps> = () => {
    const { data: todos, isLoading } = useTodosQuery();
    useTitle("Todo");

    const { mutate: addTodo } = useAddTodoMutation();

    const form = useFormik({
        initialValues: { task: "" },
        onSubmit: (values) => {
            addTodo({ task: values.task });
            form.resetForm();
        },
    });

    return (
        <DefaultLayout>
            <div className="container grow flex justify-center items-center">
                <main className="card shadow-2xl shadow-gray-300 bg-white w-96">
                    <div className="card-body">
                        <h2 className="card-title">Todo</h2>
                        {isLoading && <p>Loading...</p>}
                        {!isLoading && todos && (
                            <ul>
                                {todos.map((todo) => (
                                    <li key={todo.id}>{todo.task}</li>
                                ))}
                            </ul>
                        )}
                        <form onSubmit={form.handleSubmit}>
                            <div className="join flex">
                                <input
                                    type="text"
                                    placeholder="Task"
                                    className="input input-bordered join-item grow"
                                    {...form.getFieldProps("task")}
                                />
                                <button type="submit" className="btn btn-neutral join-item">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </DefaultLayout>
    );
};
