export class Cell {

    glycolysis(input: string[]) {
        if (input[0] === 'glucose') {
            return ['pyruvate'];
        }

        return [];
    }
}
