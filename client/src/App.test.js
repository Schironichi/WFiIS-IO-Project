import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import App from './App';
import "@testing-library/react/dont-cleanup-after-each";
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

jest.useFakeTimers();

describe('render app', () => {
    beforeAll(() => {
        render( <App/>);
    })
    it('constant element of mainpage', () => {
        expect(screen.getAllByRole("option")).toHaveLength(7);
        expect(screen.getByText("Pomoc")).toBeInTheDocument();
        expect(screen.getByText("Regulamin")).toBeInTheDocument();
        expect(screen.getByText("Organizacje charytatywne")).toBeInTheDocument();
        expect(screen.getByText("Twórcy")).toBeInTheDocument();
        expect(screen.getByText("Logowanie")).toBeInTheDocument();
        expect(screen.getByText("Mój profil")).toBeInTheDocument();
        expect(screen.getByText("Kontakt")).toBeInTheDocument();
        expect(screen.getByText("Filtry")).toBeInTheDocument();
    });
    afterAll(() => {
        cleanup();
    });
})