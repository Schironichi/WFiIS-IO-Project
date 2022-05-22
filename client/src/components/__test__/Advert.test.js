import { Advert } from "../pages/Advert";
import "@testing-library/react/dont-cleanup-after-each";
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

jest.useFakeTimers();

const mockData=
[{
    city: "Tarnow",
    creation_date: "2022-05-05T22:00:00.000Z",
    expiration_date: "2022-05-10T22:00:00.000Z",
    id_category: 1,
    id_notice: 2,
    id_organization: 1,
    id_status: "RES",
    id_subcategory: "1",
    id_user: 1,
    priority: "wyroznione",
    reports_number: 0,
    status_description: "active",
    type: "szukam",
},
{
    city: "Tarnow",
    creation_date: "2022-05-05T22:00:00.000Z",
    expiration_date: "2022-05-10T22:00:00.000Z",
    id_category: 1,
    id_notice: 2,
    id_organization: 1,
    id_status: "RES",
    id_subcategory: "1",
    id_user: 1,
    priority: "wyroznione",
    reports_number: 0,
    status_description: "reserved",
    type: "szukam",
}]

var response=[
    "noticedetails",
    "showAdvert",
    "reserved",
    "reserveAdvert",
];

var buttons=["Zobacz ogłoszenie", "Rezerwuj"];

describe('test active advert component', () => {
    beforeAll(() => {
        render( <Router>
                <Switch>
                    <Advert key={"test"} data={mockData[0]} res={response} buttons={buttons} onClick={null}/>
                </Switch>
        </Router>);
    })
    it('properties', () => {
       expect(screen.getByText("Aktywny")).toBeInTheDocument();
       expect(screen.getByText("Wygasa: 11 May 2022")).toBeInTheDocument();
       expect(screen.getByText("Priorytet: wyroznione")).toBeInTheDocument();
       expect(screen.getByText("Typ: szukam")).toBeInTheDocument();
    });
    it('render ico',() => {
        expect(screen.getByAltText("Our_icon")).toBeInTheDocument();
        expect(screen.getByRole("img")).toBeInTheDocument();
    })
    it('render buttons',() => {
        expect(screen.getAllByRole("button")).toHaveLength(2);
        expect(screen.getByText("Rezerwuj")).toBeInTheDocument();
        expect(screen.getByText("Zobacz ogłoszenie")).toBeInTheDocument();
    })
    afterAll(() => {
        cleanup();
    });
})

describe('test inactive advert component', () => {
    beforeAll(() => {
        render( <Router>
            <Switch>
                <Advert key={"test"} data={mockData[1]} res={response} buttons={buttons} onClick={null}/>
            </Switch>
    </Router>);
    })
    it('properties', () => {
       expect(screen.getByText("Zarezerwowany")).toBeInTheDocument();
       expect(screen.getByText("Wygasa: 11 May 2022")).toBeInTheDocument();
       expect(screen.getByText("Priorytet: wyroznione")).toBeInTheDocument();
       expect(screen.getByText("Typ: szukam")).toBeInTheDocument();
    });
    it('render ico',() => {
        expect(screen.getByAltText("Our_icon")).toBeInTheDocument();
        expect(screen.getByRole("img")).toBeInTheDocument();
    })
    it('render buttons',() => {
        expect(screen.getAllByRole("button")).toHaveLength(1);
        expect(screen.queryByText("Rezerwuj")).toBeNull();
        expect(screen.getByText("Zobacz ogłoszenie")).toBeInTheDocument();
    })
    afterAll(() => {
        cleanup();
    });
})