const calculateSummary = (data) => {
    const now = new Date();

    // Calculate start and end of the current day
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

    // star and end week of(saturday to friday)
    const dayOfweek = now.getDay();
    const differenceToSaturday = (dayOfweek + 1) % 7;
    const startOfWeek = new Date(startOfDay);
    startOfWeek.setDate(startOfWeek.getDate() - differenceToSaturday);

    // Calculate end of the week (Friday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    // Calculate start and end of the current month
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    endOfMonth.setHours(23, 59, 59, 999);

    // Calculate start and end of the current year
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear(), 11, 31);
    endOfYear.setHours(23, 59, 59, 999);

    // total cash in and out
    const totals = {
        today: { in: 0, out: 0 },
        week: { in: 0, out: 0 },
        month: { in: 0, out: 0 },
        year: { in: 0, out: 0 }
    } || {}

    // Iterate through all data to calculate totals
    data.forEach(entry => {
        const entryDate = new Date(entry.date);
        const amount = Number(entry.amount || 0);
        const type = entry.cash === 'in' ? 'in' : 'out';

        if (entryDate >= startOfDay && entryDate <= endOfDay) totals.today[type] += amount;
        if (entryDate >= startOfWeek && entryDate <= endOfWeek) totals.week[type] += amount;
        if (entryDate >= startOfMonth && entryDate <= endOfMonth) totals.month[type] += amount;
        if (entryDate >= startOfYear && entryDate <= endOfYear) totals.year[type] += amount;
    });

    return totals;

}

export default calculateSummary;