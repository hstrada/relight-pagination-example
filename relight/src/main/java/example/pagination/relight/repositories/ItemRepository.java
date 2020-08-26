package example.pagination.relight.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import example.pagination.relight.entities.Item;

public interface ItemRepository extends PagingAndSortingRepository<Item, Integer> {

	Page<Item> findAll(Pageable pageable);
}