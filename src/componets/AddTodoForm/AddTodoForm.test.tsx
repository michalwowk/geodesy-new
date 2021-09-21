import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BoardProvider } from "../../context/boardContext";
import { AddTodoForm } from "./AddTodoForm";
import BoardColumn from "componets/BoardColumn";
import { DragDropContext } from "react-beautiful-dnd";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

//TODO: Finish this test
const BoardColumnProps = {
  id: "1",
  title: "Column Title",
  projects: [
    { id: "1", title: "Walk the dog" },
    { id: "2", title: "Watch TV" },
  ],
};

const onDragEnd = jest.fn();
const handleSubmit = jest.fn();

const renderWithProvider = (ui: any) => {
  const history = createMemoryHistory();
  const Wrapper = ({ children }: any) => (
    <Router history={history}>
      <BoardProvider>
        <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
      </BoardProvider>
    </Router>
  );
  return render(ui, { wrapper: Wrapper });
};

describe("AddTodoForm component", () => {
  it("adds new project", async () => {
    //Given
    renderWithProvider(<BoardColumn column={BoardColumnProps} />);
    const OpenFormBtn = screen.getByRole("button", { name: /Add project/i });

    //When
    userEvent.click(OpenFormBtn);
    const input = await screen.findByRole("textbox");

    fireEvent.change(input, {
      target: {
        value: "Example task title",
      },
    });

    const submit = screen.getByTestId("add-todo-submit");

    fireEvent.click(submit);

    //Then
    screen.debug();
  });

  it("handle closing the form", () => {
    renderWithProvider(<AddTodoForm columnId="testId" />);

    const OpenFormBtn = screen.getByRole("button", { name: /Add project/i });
    userEvent.click(OpenFormBtn);

    const closeBtn = screen.getByRole("button", { name: /close card/i });
    const input = screen.getByRole("textbox");
    expect(closeBtn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    userEvent.click(closeBtn);
    expect(closeBtn).not.toBeInTheDocument();
    expect(input).not.toBeInTheDocument();
  });
});
