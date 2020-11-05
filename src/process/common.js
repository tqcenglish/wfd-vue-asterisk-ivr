module.exports = {
    hangup: (context) => {
        return context.hangup().then(() => {
            context.close();
        });
    },
    answer: (context) => {
        return context.answer();
    }
}