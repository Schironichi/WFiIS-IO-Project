import { ButtonDodaj } from "../Button_dodaj";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

jest.useFakeTimers();

describe('test buttonDodaj', () => {
    it('render buttonDodaj properly', () => {
        render(
            <Router>
                <Switch>
                    <ButtonDodaj param={"dataid"} rest={'noticedetails'} onClick={null} className={'adv-button'} buttonSize={'btn2--small'}>Press me</ButtonDodaj>
                </Switch>
            </Router>);
        expect(screen.getByText("Press me")).toBeInTheDocument();
        expect(screen.getByRole('link')).toBeInTheDocument();
    });
})