import { Divider, Group, Modal, Text } from "@mantine/core";

export default function TaskViewModal({ isOpened, onClose, task }) {
  return (
    <>
      <Modal
        opened={isOpened}
        onClose={onClose}
        size={"lg"}
        centered
        title={
          <Text
            fw={500}
            fz={{ base: "h4", sm: "h3" }}
            // truncate="end"
            w={"70%"}
          >
            {task.title}
          </Text>
        }
      >
        <Text my={"sm"}>{task.description}</Text>
        <Divider my={"sm"} />
        <Text fw={500}>Owner</Text>
        <Text>{task?.owner?.username}</Text>
        <Divider my={"sm"} />
        <Text fw={500}>Shared with</Text>
        <Group gap={5}>
          {task?.sharedWith?.map((user, idx) => (
            <Text key={idx}>
              {user.username}
              {idx < task?.sharedWith?.length - 1 ? "," : ""}
            </Text>
          ))}
        </Group>
      </Modal>
    </>
  );
}
