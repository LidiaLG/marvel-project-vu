//interfaz genérica para poder usarla tanto para series como para cómics
export interface DataApi<T> {
    code: number;
    status: string;
    data: {
      results: T[];
    };
}
  
  