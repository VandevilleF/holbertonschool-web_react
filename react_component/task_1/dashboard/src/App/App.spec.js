import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test('APp component', () => {
  render(<App />);
});

test('affiche l\'alerte quand Ctrl + H est pressé', () => {
  // Spy alert and mock alert popup
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

  render(<App />);

  fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

  expect(alertSpy).toHaveBeenCalledWith('Logging you out');

  // Restore alert after test
  alertSpy.mockRestore();
});
