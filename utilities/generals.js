// Function to group tools by category
export function groupToolsByCategory(toolList) {
  const groupedTools = {};

  toolList.forEach((tool) => {
    const category = tool.category;

    // If the category doesn't exist in groupedTools, create it
    if (!groupedTools[category]) {
      groupedTools[category] = {
        category,
        tools: [],
      };
    }

    // Add the tool to the respective category
    groupedTools[category].tools.push({
      title: tool.title,
      subtitle: tool.subtitle,
      image: tool.imageUrl,
      path: tool.path,
    });
  });

  // Return an array of grouped tools
  return Object.values(groupedTools);
}
