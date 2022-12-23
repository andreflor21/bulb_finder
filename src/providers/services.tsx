import api from '../services/api';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { AxiosError, AxiosResponse } from 'axios';

interface ServicesProviderProps {
  children: ReactNode;
}
export interface ServiceData {
  id: number | string;
  name?: number | string;
}
export interface BulbsData {
  id?: number | string;
  bulb?: string;
  part_id?: number | string;
  part?: string;
  model?: string;
  year?: number | string;
  model_id?: number | string;
  make_id?: number | string;
  make?: string;
  img_m_series?: string;
  url_m_series?: string;
  img_platinum?: string;
  url_platinum?: string;
}
interface ServicesProviderData {
  getYears: (setError: Dispatch<SetStateAction<boolean>>) => void;
  getMakes: (
    setError: Dispatch<SetStateAction<boolean>>,
    year?: number | string
  ) => void;
  getModels: (
    setError: Dispatch<SetStateAction<boolean>>,
    year?: number | string,
    make?: number | string
  ) => void;
  getBulbs: (
    setError: Dispatch<SetStateAction<boolean>>,
    model?: number | string
  ) => void;
  years: ServiceData[];
  makes: ServiceData[];
  models: ServiceData[];
  bulbs: BulbsData[];
  selectedYear: number | string;
  selectedMake: number | string;
  selectedModel: number | string;
  setYear: Dispatch<SetStateAction<number | string>>;
  setMake: Dispatch<SetStateAction<number | string>>;
  setModel: Dispatch<SetStateAction<number | string>>;
}

export const ServicesContext = createContext<ServicesProviderData>(
  {} as ServicesProviderData
);

export const ServicesProvider = ({ children }: ServicesProviderProps) => {
  const [years, setYears] = useState<ServiceData[]>([]);
  const [makes, setMakes] = useState<ServiceData[]>([]);
  const [models, setModels] = useState<ServiceData[]>([]);
  const [bulbs, setBulbs] = useState<BulbsData[]>([]);
  const [selectedYear, setYear] = useState<number | string>(0);
  const [selectedMake, setMake] = useState<number | string>(0);
  const [selectedModel, setModel] = useState<number | string>(0);

  const getYears = (setError: Dispatch<SetStateAction<boolean>>) => {
    api
      .get<ServiceData[]>('years')
      .then((res) => setYears(res.data))
      .catch((err) => setError(true));
  };

  const getMakes = (
    setError: Dispatch<SetStateAction<boolean>>,
    year: number | string = 0
  ) => {
    if (year === 0) {
      return setError(true);
    }
    api
      .get<ServiceData[]>(`makes?year=${year}`)
      .then((res) => setMakes(res.data))
      .catch((err) => setError(true));
  };

  const getModels = (
    setError: Dispatch<SetStateAction<boolean>>,
    year: number | string = 0,
    make: number | string = 0
  ) => {
    if (year == 0 || make == 0) {
      return setError(true);
    }
    api
      .get<ServiceData[]>(`models?year=${year}&make=${make}`)
      .then((res) => setModels(res.data))
      .catch((err) => setError(true));
  };

  const getBulbs = (
    setError: Dispatch<SetStateAction<boolean>>,
    model: number | string = 0
  ) => {
    if (model == 0) {
      return setError(true);
    }
    api
      .get<BulbsData[]>(`bulbs?model=${model}`)
      .then((res) => {
        setBulbs(res.data);
        console.log(res.data, 'provider');
      })
      .catch((err) => setError(true));
  };

  return (
    <ServicesContext.Provider
      value={{
        years,
        makes,
        models,
        bulbs,
        selectedYear,
        selectedMake,
        selectedModel,
        setYear,
        setMake,
        setModel,
        getYears,
        getMakes,
        getModels,
        getBulbs,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
export const useServices = () => useContext(ServicesContext);
