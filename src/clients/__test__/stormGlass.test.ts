import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixture from '@test/fixtures/stormGlass_weather_3_hours.json';
import stormGlassNormalizedResponse3HoursFixture from '@test/fixtures/stormGlass_normalized_response_3_hours.json';

jest.mock('axios');

describe ('StormGlass client', () => {
    it('should return the normalized forecast from the stormGlass service.', async () => {
        const lat = -58.7984;
        const lng = -17.8081;

        axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture);

        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual(stormGlassNormalizedResponse3HoursFixture);
    });
});