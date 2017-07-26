
export const hasFever = {
    "and": [
        {
            ">": [
                {
                    "var": "model.lastTemperature"
                },
                {
                    "var": "model.feverThreshold"
                }
            ]
        }
    ]
}
