/*
 * 1. Implement the React.Component, <Input />
 *   - It should allow the user to type text in.
 *   - Style as you wish.
 *
 * 2. Implement the React.Component, <Output />
 *   - It should show the user the computed result from calling 'isClosed()'.
 *   - Style as you wish.
 *
 * 3. Implement the React.Component, <Button />
 *   - It should handle user's click, which will call 'isClosed()'
 *   - It should handle user's pressing 'Enter', which will also call 'isClosed()'
 *
 * 4. Implement `isClosed()`
 *   - Given a string input, `str`, write a function that returns a boolean if the `str`
 *     is properly "closed". This means we have 2 types of characters:
 *     1. Opening Character "^"
 *     2. Closing Character "$"
 *     - The function needs to check that whenever an Opening Character appears, then a Closing
 *     Character comes after it.
 *     - It should handle nesting, so "^^$$" should return `true`.
 */
import React from 'react';

export function Input(props) {
  return <div />;
}

export function Button(props) {
  return <div />;
}

export function Output(props) {
  return <div />;
}

export function isClosed(str) {
  return false;
}

export class ComputeIO extends React.Component {
  render() {
    return (
      <section>
        <Input />
        <Button />
        <Output />
      </section>
    );
  }
}
