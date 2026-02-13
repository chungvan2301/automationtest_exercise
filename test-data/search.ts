export const SEARCH_TERMS = [
    { searchTerm: 'men' },
    { searchTerm: 'jeans' }
] as const;

export type SearchTerm = typeof SEARCH_TERMS[number]['searchTerm'];
