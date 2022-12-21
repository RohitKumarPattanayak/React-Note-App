import React, { useState } from "react";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">
          {props.notes.length -
            index +
            ") " +
            note.body.split("\n")[0].replace(/[^a-zA-Z0-9 ]/g, "")}
          .....
        </h4>
        {props.currentNote.id === note.id && (
          <button
            onClick={props.delNote}
            className="delete-btn"
            style={{
              background: "transparent",
              margin: "1%",
              color: "white",
              border: 0,
            }}
          >
            <i
              style={{ color: "white", padding: "1%" }}
              class="fa-sharp fa-solid fa-trash"
            ></i>
          </button>
        )}
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <div>
          <input onChange={props.info} type="checkbox" id="darkLite" />
          <label for="darkLite"></label>
        </div>
        <h3>Notes</h3>

        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
