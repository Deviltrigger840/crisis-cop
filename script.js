function scrollTeam(direction) {
  const container = document.getElementById("teamCarousel");
  const scrollAmount = 220; // One card + margin
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}
