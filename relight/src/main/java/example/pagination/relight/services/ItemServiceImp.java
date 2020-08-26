package example.pagination.relight.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import example.pagination.relight.entities.Item;
import example.pagination.relight.repositories.ItemRepository;

@Service
public class ItemServiceImp implements ItemService {

	@Autowired
	private ItemRepository itemRepository;

	@Override
	public List<Item> getItemsList(int page, int size) {

		Page<Item> items = itemRepository.findAll(PageRequest.of(page, size));
		List<Item> itemsList = items.getContent();

		return itemsList;
	}

}
