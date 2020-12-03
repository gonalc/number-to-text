export function convertNumberToEnglishText(n: number): string {
    if (n === 0) return 'zero'; // Main exception in the function
    // Initialize the variable that will be returned at the end of the parsing
    let transcription;
    const unitsParser = (num: number, hundred: boolean, teenager: boolean): string => {
        // Object with units information
        // Zero doesn't exists as if that is the case, it has been already returned
        const units: any = {
            0: '',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
        }

        // Object with teens information
        // They are an exception with the same rule
        const teens: any = {
            0: 'ten',
            1: 'eleven',
            2: 'twelve',
            3: 'thirteen',
            4: 'forteen',
            5: 'fifteen',
            6: 'sixteen',
            7: 'seventeen',
            8: 'eighteen',
            9: 'nineteen',
        }

        // Only need the teens to be displayed when is not coming a "hundred" after them
        const number = (teenager && !hundred) ? teens[num] : units[num];

        return number;
    }
    const decensParser = (num: number): string => {
        // Object with the information for the decens
        // Zero is not needed
        // One is an exception that is solved in unitsParser with the teens
        // No need any string after the teen
        const decens: any = {
            0: '',
            1: '',
            2: 'twenty',
            3: 'thirty',
            4: 'forty',
            5: 'fifty',
            6: 'sixty',
            7: 'seventy',
            8: 'eighty',
            9: 'ninety',
        }
        return decens[num];
    }

    // Get the absolute value as a string for better manipulation
    const str: string = Math.abs(n).toString();
    // Split for iteration
    const split = str.split('');

    // Start iteration for each digit in the number
    transcription = split.map((digit, index) => {
        // Digit's position from right to left
        // Needed for the right parse
        const position = str.length - index;

        // Initialize the variable that will be returned at the end of the iteration
        let result;

        const isTeenager: boolean = Number(str[index - 1]) === 1; // If the number is after a 1, so could be a teen
        const isThousand: boolean = position % 4 === 0; // For the thousand word
        const isHundred: boolean = position % 3 === 0; // For the hundred word

        // If this digit is in the decens, basic parse
        if (position % 3 === 2) result = decensParser(Number(digit));
        // Otherwise, complex parse
        else result = unitsParser(Number(digit), isHundred, isTeenager);
        
        // Modifier in case the digit is in the hundreds or thousands
        let modifier: string = '';
        if (isThousand) modifier = ' thousand';
        else if (isHundred && Number(digit) > 0) modifier = ' hundred';
        
        return `${result}${modifier}`;
    });
    transcription = transcription.join(' ').trim();
    transcription = transcription.replace(/\s+/g, ' ');

    // Add the word "negative" in case the number is lower than 0
    if (n < 0) transcription = `negative ${transcription}`;

    return transcription;
}
